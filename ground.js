class ground
{
    constructor(x,y,width,height)
    {

        var options=
        {
            isStatic:true
        }

        this.groundObject=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.groundObject);
        this.width=width;
        this.height=height;
    }

    display()
    {
        rectMode(CENTER);
        push()
        fill(rgb(87, 181, 217));
        noStroke();
        stroke(rgb(87, 181, 217));
        noStroke()
        rect(this.groundObject.position.x,this.groundObject.position.y,this.width,this.height); pop()
    }
}