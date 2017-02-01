function Plane() {
  this._status = "flying"
};

Plane.prototype.changeStatus = function(status) {
  this._status = status
};

Plane.prototype.getStatus = function () {
  return this._status
};
