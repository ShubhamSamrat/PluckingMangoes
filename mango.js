class Mango extends BaseClass {
    constructor(x, y){
        
        
      super(x,y,70,80);
      
      
      this.image = loadImage("mango.png");
      Matter.Body.setStatic(this.body, true)
    }
  
  };
  