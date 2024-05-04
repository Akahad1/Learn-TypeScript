{
    
  type Vehical ={
    bike :string
    car:string;
    bus :string

  }

  type Owner ='bike '| "car" |"bus"


   type Owner2 = keyof Vehical


   const addUser =<X,Y extends keyof X>(obj:X,key:Y)=>{
    return obj[key]
   }
 const user ={

    name:"sahad",
    age:23,
    address :'tsc'

 }

 const res =addUser(user,"name")

}