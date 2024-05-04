{

    // async typeScript
  const creatPromis =()=>{
    return new Promise((resolve ,reject)=>{
        const data: string = 'someting'
        if(data){
            resolve(data)
        }
        else{
            reject(data)
        }

    })
  }


  const showData =async()=>{

    const data = await creatPromis()
    console.log(data)

  }
showData()

type Sheke ={
    bike:string;
    car:string;
    bus:string;
    plne:string

}

type chakVihical<T>=T extends keyof Sheke ? true : false


type HasBike =chakVihical<"plne">

}