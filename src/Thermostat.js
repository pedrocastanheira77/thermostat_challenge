'use strict';

function Thermostat(){
  this.defaultSetpointTemp = 20
  this.defaulPowerSavingMode = true
  this.minTemp = 10
  this.maxTempPowerSafeOn = 25
  this.maxTempPowerSafeOf = 32
  this._value = this.defaultSetpointTemp;
  this._powerSavingMode = this.defaulPowerSavingMode;
};

Thermostat.prototype.getSetPoint = function () {
  return this._value;
};

Thermostat.prototype.increaseSetPoint = function () {
  this._value = this._powerSavingMode ? Math.min(this.maxTempPowerSafeOn, this._value + 1) : Math.min(this.maxTempPowerSafeOf, this._value + 1);
};

Thermostat.prototype.decreaseSetPoint = function () {
  this._value = Math.max(this.minTemp, this._value - 1);
};

Thermostat.prototype.getEnergyUsage = function () {
  if (this._value < 18) {
    return "low-usage";
  } else if (this._value >= 25) {
    return "high-usage";
  } else {
    return "medium-usage";
  }
};
