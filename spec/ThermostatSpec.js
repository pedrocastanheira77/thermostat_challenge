'use strict';

describe('Thermostat', function(){

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

  describe('::new', function(){
    it('Thermostat starts at 20 degrees', function(){
      expect(thermostat._value).toBe(defaultSetpointTemp);
    });

    it('Thermostat defaulted to on', function(){
      expect(thermostat._powerSavingMode).toBe(defaulPowerSavingMode);
    });

  });

  describe('#getSetPoint', function(){
    it('Thermostat starts at 20 degrees', function(){
      expect(thermostat.getSetPoint()).toBe(defaultSetpointTemp);
    });
  });

  describe('#increaseSetPoint', function(){
    it('can increase temperature setpoint by 1', function(){
      thermostat.increaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(defaultSetpointTemp+1);
    });

    it('in power safe mode, the maximum temperature is 25 degrees', function(){
      thermostat._powerSavingMode = defaulPowerSavingMode;
      thermostat._value = maxTempPowerSafeOn;
      thermostat.increaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(maxTempPowerSafeOn);
    });

    it('If power saving mode is off, the maximum temperature is 32 degrees', function(){
      thermostat._powerSavingMode = !defaulPowerSavingMode;
      thermostat._value = maxTempPowerSafeOf;
      thermostat.increaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(maxTempPowerSafeOf);
    });
  });

  describe('#decreaseSetPoint', function(){
    it('can decrease temperature setpoint by 1', function(){
      thermostat.decreaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(defaultSetpointTemp-1);
    });

    it('The minimum temperature is 10 degrees', function(){
      thermostat._value = minTemp;
      thermostat.decreaseSetPoint();
      expect(thermostat.getSetPoint()).toBe(minTemp);
    });
  });

  describe('#getEnergyUsage', function(){
    it('when energy usage <18, low-usage', function(){
      thermostat._value = 10;
      expect(thermostat.getEnergyUsage()).toBe("low-usage");
    });

    it('when energy usage <25, medium-usage', function(){
      thermostat._value = 20;
      expect(thermostat.getEnergyUsage()).toBe("medium-usage");
    });

    it('when energy usage >25, high-usage', function(){
      thermostat._value = 50;
      expect(thermostat.getEnergyUsage()).toBe("high-usage");
    });
  });
});
