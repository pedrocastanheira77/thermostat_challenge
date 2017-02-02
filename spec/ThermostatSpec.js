describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('Thermostat temperature setting', function(){
    it('Thermostat starts at 20 degrees', function(){
      expect(thermostat.getSetting()).toBe(20);
    });
  });
});
