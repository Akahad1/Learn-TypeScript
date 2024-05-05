class Animal{
    // name:string;
    // spices :string;
    // sound:string

    constructor( public name:string, public spices:string, public sound:string){
        // this.name=name;
        // this.spices=spices
        // this.sound=sound
    }

    makeSound(){
        console.log(`the ${this.name } say ${this.sound}`)
    }
}

const dog =new Animal( "german sefard",'dog',"Gew Gew")

dog.makeSound()