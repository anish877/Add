class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.4,
            length: 20
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        stroke(0,0,0)
        strokeWeight(5);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
}}
