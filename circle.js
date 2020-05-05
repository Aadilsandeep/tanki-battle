function Circle(x, y, r){
  var options={
    //restitution:1,
    friction:0,
    isStatic:true
    }
  this.body=Bodies.circle(x, y, r,options);
  World.add(world,this.body);
  this.r=r;
 

  this.show=function(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill("red");
    ellipse(0,0,this.r*2);
    pop();
  }
}
