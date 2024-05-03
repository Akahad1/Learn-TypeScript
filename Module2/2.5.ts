

const createArray =(param:string):string[]=>{
    return [param]
}
const createArrayWithGanetic =<T>(param:T):T[]=>{
    return [param];
}



const res1 =createArray('sahad')

const res2 =createArrayWithGanetic<Number>(22323)


const webCoures =<T>(student:T)=>{
    const coures ='next level web developer'
    
    return{
        ...student,
        coures

    }

}

const res3 =webCoures({name:'x',emeil:'x@gmail.com'})