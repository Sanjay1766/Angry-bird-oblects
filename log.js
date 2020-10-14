class Log {

    constructor(x,y,width,angle) {

        var option = {

            friction : 1,
            density : 1,


            resititution : 0.8
        }

this.body=Bodies.rectangle(x,y,width,20,option)
this.width =width 
this.height = 20
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)




    }







    display() {

        var pos = this.body.position
        var angle = this.body.angle
        push ()
        translate(pos.x,pos.y)
        rotate (angle)

        rectMode(CENTER)
        strokeWeight (4)
        stroke("green")
        fill ("white")
        
        rect(0,0,this.width,this.height)

        pop ()




    }
















}