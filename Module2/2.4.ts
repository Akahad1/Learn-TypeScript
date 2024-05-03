
interface FinansilDeveloper<T=null>{
    name:string,
    age:number
    computer:{
        name:string
        price:number
    }

    smartWatch?:T
}

const richDeveloper:FinansilDeveloper ={
    name:'sahad',
    age:12,
    computer:{
        name:'hp',
        price :12222
    }
    
}
const PoorDeveloper:FinansilDeveloper<{
    name:string
    price:number
}> ={
    name:'Sakiv',
    age:23,
    computer:{
        name:'hp',
        price :12222
    },

    smartWatch:{
        name :'relme',
        price:3333
    }

}