class Box{
    constructor(x, y,color) {
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':0.3
        }
        this.visibility=255;
        this.body = Bodies.rectangle(x, y,60,60, options);
        this.color=color;
        
        if(this.color==='red')
          {
            this.image=loadImage('Rbox.png');
          }
          if(this.color==='orange')
          {
            this.image=loadImage('Obox.png');
          }
          if(this.color==='yellow')
          {
            this.image=loadImage('Ybox.png');
          }
        World.add(world, this.body);
      }
      display(){
        
        
        if(this.body.speed<8)
        {
          push();
          image(this.image,this.body.position.x,this.body.position.y,60,60);
          pop();
         }
        else{
          //to remove body when color completely disappears
          if(this.visibility<100)
          {
         World.remove(world,this.body);
         }
          push();
          
          this.visibility-=20;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50);
          
          pop();
          
        }
        
      }
}  