class Suelo{ 
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        } 
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
    }
    display(){
        var post = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(post.x,post.y,this.width,this.height);
    }
}