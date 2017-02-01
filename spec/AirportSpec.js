describe("Airport", function() {
  var airport;
  var plane;
  var weather

  beforeEach(function() {
    airport = new Airport()
    plane = jasmine.createSpyObj("plane", ["changeStatus"]);
    plane2 = {};
    plane3 = {};
  });

  describe("when weather not stormy?", function(){
    beforeEach(function() {
      spyOn(airport.weatherReport, "isStormy").and.returnValue(false);
      airport.land(plane);
    });

    it("lands a plane", function(){
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes()).toContain(plane);
    });

    it("takeoff a plane", function(){
      plane2.changeStatus = jasmine.createSpy("flying spy");
      plane3.changeStatus = jasmine.createSpy("flying spy");
      airport.land(plane2);
      airport.land(plane3);
      airport.takeOff(plane2);
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes()).not.toContain(plane2);
    });
  });

describe("when weather stormy?", function(){
    it("won't land if stormy", function(){
      spyOn(airport.weatherReport, "isStormy").and.returnValue(true);
      expect(function() {airport.land(plane)}).toThrow("Unable to land, Weather is stormy");
    });
  });
});
