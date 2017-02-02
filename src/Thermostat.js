'use strict';

function Thermostat(){
  this._value = 20;
};

Thermostat.prototype.getSetPoint = function () {
  return this._value;
};
