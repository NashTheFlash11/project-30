class Box{

    constructor(x,y,width,height){
       var options={
        
        restitution : 0.4,
        friction : 0.5
       }
       
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.visibility = 255;

       this.width = width;
       this.height = height;

       World.add(world, this.body);
    }


    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill("brown");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        if(this.body.speed > 3){
            
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            World.remove(world,this.body);
        }
        pop();
        
    }
}