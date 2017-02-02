'use strict';

describe('Feature Tests', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

// Thermostat starts at 20 degrees
  describe('Thermostat temperature setting', function(){
    it('Thermostat starts at 20 degrees', function(){
      expect(thermostat.getSetPoint()).toBe(20);
    });
  });
});
