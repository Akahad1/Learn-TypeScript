{


    let anything:any ;
anything='hello develpper';

(anything as string)


const kgtoGm =(value : string | number) : string | number |undefined => {
    if (typeof value === 'string'){
        const numberValue =parseFloat(value)*1000
        return `this is gr :${numberValue}`
    }

    else if (typeof value === 'number'){
        return value*1000

    }
}

kgtoGm("100") as string
kgtoGm(100) as number


type ErorMess ={
    message :string
}

try{

}
catch(error){

    console.log((error as ErorMess).message )

}
}