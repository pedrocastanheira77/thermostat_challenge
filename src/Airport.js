function Airport() {
  this._planes = [];
};

Airport.prototype.land = function(plane) {
  this._addToPlanes(plane);
  plane.landed();
};

Airport.prototype.showPlanes = function() {
  return this._planes;
};

Airport.prototype._addToPlanes = function(plane) {
  this._planes.push(plane);
};
