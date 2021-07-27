class Snow {
    constructor(x,y,radius){
    var options = {
        denstity:1,
        friction:0.005,
    }
    image = loadImage("snow4.webp")
    this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world, this.body)
    }

    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle);
        fill(0)
        ellipseMode(RADIUS)
        image(this.image, rgb(0,255), 0)
        ellipse(0,0, this.radius, this.radius)
        pop()
    }
}