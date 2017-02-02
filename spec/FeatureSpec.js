'use strict';

describe('Feature Tests', function(){

  var thermostat;
  var defaultSetpointTemp;
  var defaulPowerSavingMode;
  var minTemp;
  var maxTempPowerSafeOn;
  var maxTempPowerSafeOf;

  beforeEach(function(){
    thermostat = new Thermostat;
    defaultSetpointTemp = thermostat.defaultSetpointTemp;
    defaulPowerSavingMode = thermostat.defaulPowerSavingMode;
    minTemp = thermostat.minTemp;
    maxTempPowerSafeOn = thermostat.maxTempPowerSafeOn;
    maxTempPowerSafeOf = thermostat.maxTempPowerSafeOf;
  });

  it('Thermostat initialised at 20 degrees', function(){
    expect(thermostat.getSetPoint()).toBe(defaultSetpointTemp);
  });

  it('You can increase the temperature with an up function', function(){
    thermostat.increaseSetPoint();
    expect(thermostat.getSetPoint()).toBe(defaultSetpointTemp+1);
  });

  it('You can decrease the temperature with a down function', function(){
    thermostat.decreaseSetPoint();
    expect(thermostat.getSetPoint()).toBe(defaultSetpointTemp-1);
  });

  it('The minimum temperature is 10 degrees', function(){
    for(var i=0; i<=minTemp; i++) {
      thermostat.decreaseSetPoint();
    };
    expect(thermostat.getSetPoint()).toBe(minTemp);
  });

  it('If power saving mode is on, the maximum temperature is 25 degrees', function(){
    thermostat._powerSavingMode = defaulPowerSavingMode;
    for(var i=defaultSetpointTemp; i<=maxTempPowerSafeOn; i++) {
      thermostat.increaseSetPoint();
    };
    expect(thermostat.getSetPoint()).toBe(maxTempPowerSafeOn);
  });

  it('Power saving mode is on by default', function(){
    expect(thermostat._powerSavingMode).toBe(defaulPowerSavingMode);
  });

  it('You can ask about the thermostats current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage', function(){
    thermostat._value = 10
    expect(thermostat.getEnergyUsage()).toBe("low-usage");
    thermostat._value = 20
    expect(thermostat.getEnergyUsage()).toBe("medium-usage");
    thermostat._value = 50
    expect(thermostat.getEnergyUsage()).toBe("high-usage");
  });
});
