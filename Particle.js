class Particle{
    constructor(){
        var options = {
            restitution : 0.4
        }
        this.body = Bodies.circle(random(20,380),10,10);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        fill(this.color);
        stroke(this.color);
        circle(this.body.position.x,this.body.position.y,20);
    }
}