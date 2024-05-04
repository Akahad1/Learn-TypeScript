{
type area ={

    width:string;
    hight :string
}


type areaString<T> ={
    [key in keyof T]:T[key]
}

type res1 =areaString<{width:number; hight:string}>

}