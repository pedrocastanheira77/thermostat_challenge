function Thermostat(){
  this._value = 20
}

Thermostat.prototype.getSetting = function () {
  return this._value
};
