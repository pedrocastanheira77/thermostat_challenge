'use strict';

function Thermostat(){
  this._value = 20;
};

Thermostat.prototype.getSetPoint = function () {
  return this._value;
};

Thermostat.prototype.increaseSetPoint = function () {
  this._value += 1;
};

Thermostat.prototype.decreaseSetPoint = function () {
  this._value -= 1;
};
