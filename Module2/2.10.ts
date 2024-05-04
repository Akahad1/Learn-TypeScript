{
type area ={

    width:string;
    hight :string
}


type areaString<T> ={
    [key in keyof T]:T[key]
}

const res1:areaString<{width:number; hight:string}> ={
    width:100,
    hight:'23'
}

}