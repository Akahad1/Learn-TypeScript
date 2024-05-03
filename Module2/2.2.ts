{


    type user1 ={
        name:string;
        age :number
    }
    interface user2 {
        name:string
        age :number
    }

    interface UeserInterfac extends user2{
        role: string
    }

  type UeserType = user1 &{role :string}


  const user:UeserInterfac ={
    name: "sahad",
    age :22,
    role:"admin"

  }


  type roll =number[]
  interface roll1{
    [index :number]: number
  }

  const RollNumber:roll1 =[0,1,2]



}