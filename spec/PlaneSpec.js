describe('Plane', function(){

  var plane

  beforeEach(function(){
    plane = new Plane();
  })

  describe('Is landed',function(){
    it('is the plane landed',function(){
      plane.changeStatus("landed");
      expect(plane.getStatus()).toBe("landed");
    });
  });
});
