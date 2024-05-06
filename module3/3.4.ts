{


 class Animal{
    name:string;
    spaecs :string

    constructor(name:string,spaecs:string){
        this.name=name;
        this.spaecs=spaecs;
    }

    makeSound(){
        console.log("Ami sound korthe pari")
    }

 }

class  Dog extends Animal{
    constructor(name:string,spaecs:string){
        super(name,spaecs)
    }
    makeBrake(){
        console.log('Ami Dog kori Barking')
    }
}
class Cat extends Animal{
    constructor(name:string,spaecs:string){
        super(name,spaecs)
    }
    makeMemu(){
        console.log('Ami Dog kori Mamue')
    }
}

//  smart Way
const isDog =(animal:Animal): animal is Dog=>  {
    return animal instanceof Dog
}

const isCat =(animal:Animal) :animal is Cat=>{
    return animal instanceof Cat
}

const getAnimal =(animal:Animal)=>{
  

    if(isDog(animal)){
        animal.makeBrake()
    }else if(isCat(animal)){
        animal.makeMemu()
    }
    else{
        animal.makeSound()
    }

}



const dog =new Dog('dog vai','dog')
const cat =new Cat('cat vai','cat')

  getAnimal(cat)
  











}