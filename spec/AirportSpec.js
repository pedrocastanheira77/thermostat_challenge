describe("Airport", function() {

  var airport;
  var plane;
  var weather

  beforeEach(function() {
    airport = new Airport()
    plane = {};
    plane2 = {};
    plane3 = {};
    weather = {};
  });

  describe("landing", function(){
    it("lands a plane", function(){
      plane.changeStatus = jasmine.createSpy("landed spy");
      // weather.isStormy = jasmine.createSpy(false)
      airport.land(plane);
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes().length).toBe(1);
      expect(airport.showPlanes()).toContain(plane);
    });

    it("won't land if stormy", function(){
      plane.changeStatus = jasmine.createSpy("landed spy");
      weather.isStormy = jasmine.createSpy("weather");
      weather.isStormy.and.callFake(function() {
        return true
      });
      expect(function() {airport.land(plane)}).toThrow();
    });
  });

  describe("takeoff", function(){
    it("takeoff a plane", function(){
      // weather.isStormy = jasmine.createSpy(false)
      plane.changeStatus = jasmine.createSpy("flying spy");
      plane2.changeStatus = jasmine.createSpy("flying spy");
      plane3.changeStatus = jasmine.createSpy("flying spy");
      airport.land(plane);
      airport.land(plane2);
      airport.land(plane3);
      airport.takeOff(plane2);
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes().length).toBe(2);
      expect(airport.showPlanes()).not.toContain(plane2);
    });
  });
});
