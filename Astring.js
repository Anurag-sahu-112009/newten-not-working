class Rope{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 4,
            length: 2
        }
        this.bodyA = pointA
        this.bodyB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.sling);
    }

    

    display(){
            line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    
}
