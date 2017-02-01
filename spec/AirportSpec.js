describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport()
    plane = {};
  });

  describe("landing", function(){
    it("lands a plane", function(){
      plane.changeStatus = jasmine.createSpy("landed spy");
      airport.land(plane);
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes().length).toBe(1);
      expect(airport.showPlanes()).toContain(plane);
    });
  });

  describe("takeoff", function(){
    it("takeoff a plane", function(){
      plane.changeStatus = jasmine.createSpy("flying spy");
      airport.takeoff(plane);
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes().length).toBe(0);
      expect(airport.showPlanes()).toContain(plane);
    });
  });
});
