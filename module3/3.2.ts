{ class person {
    name :string;
    age :number;
    address :string;

    constructor(name:string,age:number,address:string){
        this.name=name;
        this.age=age;
        this.address=address
    }
    sleepHour(hour:number){
        console.log(`I Every day Sleep ${hour} Hour`)

    }

}

 class Student extends person {
   

    constructor(name:string,age:number,address:string){
        super(name,age,address)
    }
    sleepHour(hour:number){
        console.log(`I Every day Sleep ${hour} Hour`)

    }

}
 class Teacher extends person {
   
  degeanation :string
    constructor(name:string,age:number,address:string,degeanation:string){
        super(name,age,address)
        this.degeanation=degeanation
    }
    sleepHour(hour:number){
        console.log(`I Every day Sleep ${hour} Hour`)

    }

}

const res=new Teacher('Helal',43,'feni','sir')

res.sleepHour(3)










}

