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
});
