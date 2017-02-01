function Airport() {
  this._planes = [];
  this.weatherReport = new Weather
};

Airport.prototype.land = function(plane) {
  if (this.weatherReport.isStormy()) {
    throw "Unable to land, Weather is stormy";
  };
  this._addToPlanes(plane);
  plane.changeStatus("landed");
};

Airport.prototype.showPlanes = function() {
  return this._planes;
};

Airport.prototype._addToPlanes = function(plane) {
  this._planes.push(plane);
};

Airport.prototype.takeOff = function (plane) {
  plane.changeStatus("flying");
  var index = this._planes.indexOf(plane)
  this._planes.splice(index, 1)
};
