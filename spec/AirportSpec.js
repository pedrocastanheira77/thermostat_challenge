describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport()
    plane = new Plane()
  });

  describe("landing", function(){
    it("lands a plane", function(){
      airport.land(plane);
      expect(airport.planes.length).toBe(1);
      expect(airport.planes.length).toContain(plane);
    });
  });
});
