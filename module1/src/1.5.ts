{

    const user :{
        readonly company: string;
        firstName:string;
        middleName :string;
        LastName: string;
        
    } ={
        company:"bcb",
        firstName :'Shkaive',
        middleName :"al",
        LastName:"Hasan",
       
    }
    function add (num1 :number, num2 :number):number{
        return num1+ num2
    }
    
    add(1,3)
    
    const data = (num1:number ,num2 :number):number  => num1+num2
    
    function bondu (...friend:string[]){
    
        return friend
    
    }
    
    const fb =bondu("mabul","kabul",'sakib')
    
    
    
    type FontendDevelper ={
        skills:string[]
        degesnation : "Font End Developer"
    }
    type BackendDevelper ={
        skills:string[]
        degesnation2 : " back end develper"
    }
    
    type FullStackDevelper = FontendDevelper & BackendDevelper
    
    
    const fullStackDevelper:FullStackDevelper ={
        skills:['html','css'],
        degesnation : "Font End Developer",
        degesnation2 : " back end develper"
    }
}