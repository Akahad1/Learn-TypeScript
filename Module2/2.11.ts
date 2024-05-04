{
 type person ={
    name:string
    number:number
    address:string
    gmail?:string
 }

  type res=Pick<person, "name" |"gmail">

  type res2 =Omit<person, "name"|"address">
  type res3 =Required<person>

  type res4 =Readonly<person>

  type res5 =Record<string,string>

  const obj:res5 ={
    name:"sahad",
    number:"number"
  }




}