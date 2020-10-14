const Engine= Matter.Engine
 const World= Matter.World
  const Bodies= Matter.Bodies
   var engine,world 
   var box1
   var ground
   var box2
   var pig1
   var bird
   var log1
   var box3
   var box4
   var pig2 
    function setup() { 
      createCanvas(800,800);
      
       engine=Engine.create()
        world=engine.world 
        box1= new Box(400,750,50,50) 
        box2 = new Box(600,750,50,50)
        pig1 = new Pig(500,750)
       
        log1 = new Log(500,700,300,PI/2)
        box3 = new Box(400,500,50,50)
        box4 = new Box(600,500,50,50)
        pig2 = new Pig(480,500,50,50)


        
        ground = new Ground(400,790,800,20)
        bird = new Bird(100,100)
      } 
        function draw() { 
          background("black"); 
          Engine.update(engine) 
          box1.display() 
          box2.display()
          ground.display()
          pig1.display()
          bird.display()
          log1.display()
          box3.display()
          box4.display()
          pig2.display()

        }
