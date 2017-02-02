'use strict';

describe('Feature Tests', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it('Thermostat starts at 20 degrees', function(){
    expect(thermostat.getSetPoint()).toBe(20);
  });

  it('You can increase the temperature with an up function', function(){
    thermostat.increaseSetPoint();
    expect(thermostat.getSetPoint()).toBe(21);
  });

  it('You can decrease the temperature with a down function', function(){
    thermostat.decreaseSetPoint();
    expect(thermostat.getSetPoint()).toBe(19);
  });

});
