'use strict';

describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  describe('::new', function(){
    it('Thermostat starts at 20 degrees', function(){
      expect(thermostat._value).toBe(20);
    });
  });

  describe('#getSetPoint', function(){
    it('Thermostat starts at 20 degrees', function(){
      expect(thermostat.getSetPoint()).toBe(20);
    });
  });

  describe('#increaseSetPoint', function(){
    it('can increase temperature setpoint by 1', function(){
      thermostat.increaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(21);
    });
  });

  describe('#decreaseSetPoint', function(){
    it('can decrease temperature setpoint by 1', function(){
      thermostat.decreaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(19);
    });
  });
});
