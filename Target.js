class Target
{
    constructor(x, y)
    {
        var options =
        {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, 20, 80, options)
        this.width = 20;
        this.height = 80;
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    }

    display()
    {
        //var pos = this.body.position;
        push();
        //translate(pos.x, pos.y);
        strokeWeight(3);
        stroke(0, 255, 0);
        fill(0, 0, 255);
        rectMode(CENTER);
        rect(this.x, this.y, this.width, this.height);
        pop();
    }
}