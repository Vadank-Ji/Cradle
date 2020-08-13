class Cradle
{

    constructor(body1, body2, offsetX, offsetY)
    {
      this.offsetX = offsetX;
      this.offsetY = offsetY;
      var options = {
          bodyA: body1,
          bodyB: body2,
          pointB:{x: this.offsetX, y: this.offsetY}
          

      };
      this.rope = Constraint.create(options)
      World.add(world, this.rope)

     
    }

    fly()
    {

        this.rope.bodyA = null;

    }

   
    display()
    {

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        // stroke determines the color of the constraint.
        stroke("white")
        // strokeWeight - defines the thickness of the line.
        strokeWeight(2);

        var XPoint1 = pointA.x
        var YPoint1 = pointA.y

        var XPoint2 = pointB.x + this.offsetX;
        var YPoint2 = pointB.y + this.offsetY;
       
        line(XPoint1, YPoint1, XPoint2, YPoint2);

    }

}
