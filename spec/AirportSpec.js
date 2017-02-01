describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport()
    plane = {};
    plane.changeStatus = jasmine.createSpy("landed spy");
  });

  describe("landing", function(){
    it("lands a plane", function(){
      airport.land(plane);
      expect(plane.changeStatus).toHaveBeenCalled();
      expect(airport.showPlanes().length).toBe(1);
      expect(airport.showPlanes()).toContain(plane);
    });
  });  
});
