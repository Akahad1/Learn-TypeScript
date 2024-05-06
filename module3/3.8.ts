{
  class Shape {
    getArea():number{
        return 0

     }
  }

  class Carcla extends Shape{
    redius:number;
    constructor(redius:number){
        super()
        this.redius=redius;
    }

    getArea():number{
        return Math.PI*this.redius*this.redius
    }
  }
  class Reactanguler extends Shape{
    higest:number;
    width:number
    constructor(higest:number,width:number){
        super()
        this.higest=higest;
        this.width=width
    }

    getArea():number{
        return this.higest=this.width;
    }
  }

 const getanswer=(param1:Shape)=>{
   console.log( param1.getArea())

 }

const res=new Shape()
const Carcal =new Carcla(22)
const Reactangule=new Reactanguler(3,3)

getanswer(Carcal)
console.log(getanswer(Reactangule))









}