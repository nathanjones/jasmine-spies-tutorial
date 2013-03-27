define( "spec/pages/setup.test.spec", [],
  
function() {
  
  describe( 'spy testing', function() {
    
    // the function to spy on
    var enemy = function(){};
    
    //method that the function will do
    enemy.doSomething = function (arg) {
      return arg;
    };
    
    it('should see the enemy doing something', function(){
      // tell the spy to watch for the enemy to do something
      spyOn(enemy, 'doSomething');
      // have the enemy do something 
      enemy.doSomething('anything');
      
      // expect for the enemy to have done something
      expect(enemy.doSomething).toHaveBeenCalled();
    });
    
    it('should see the enemy doing something suspicious', function(){
      spyOn(enemy, 'doSomething');
      enemy.doSomething('suspicious');
      expect(enemy.doSomething).toHaveBeenCalledWith('suspicious');
  });
  
    it('should know the number of times the enemy does something', function(){
      spyOn(enemy, 'doSomething');
      enemy.doSomething();
      enemy.doSomething('again');
      
      expect((enemy.doSomething).callCount).toBe(2);
    });

    it('should see the enemy being hostile', function() {
      spyOn(enemy, 'doSomething').andCallThrough();
      var outcome = enemy.doSomething('hostile');
      
      expect(outcome).toBe('hostile');
    });
    
    
    it('should setup a decoy when the enemy does something', function(){
      var decoy = function(){return 'decoy';};
      spyOn(enemy, 'doSomething').andCallFake(decoy);
      var result = enemy.doSomething('something');
      
      expect(result).toBe('decoy');
    });
    
    
    it('should start war with the enemy', function() {
      spyOn(enemy, 'doSomething').andReturn('war');
      var outcome = enemy.doSomething('hostile');
      
      expect(outcome).toBe('war');
    });    
      
  }); // spy testing
}); // spec
