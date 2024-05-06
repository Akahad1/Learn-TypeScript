{
  type DiffrentType =String | number
  

const add = (param1: DiffrentType ,param2: DiffrentType):DiffrentType=>{

 if( typeof param1 == 'number' && typeof param2== 'number'){
        return param1 +param2
 }else{
     return param1.toString()+param2.toString()
 }
   
}
 const res= add("5",'4')
//  console.log(res)



type normalUser={
    name:string
  }

  type AdminUser={
    name:string;
    role:'admin'

  }

  const getUser=(user:normalUser|AdminUser)=>{

  if('role' in user){
    return `my name is ${user.name} and my role ${user.role}`
  }else{
    return `my name is ${user.name} `
  }

  }

 const normal:normalUser={
    name :"Mr normal"

 }

 const admin :AdminUser={
    name:"mr admin",
    role:"admin"
 }

const res1 =getUser(normal)
console.log(res1)





}