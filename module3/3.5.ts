{
class Account {
    id:number;
    name :string;
    
  private  _balance:number;
    constructor(id:number,name:string,balance:number){
        this.id=id;
        this.name=name;
        this._balance=balance;
    }

    depositBalance(amount:number){
        this._balance=this._balance+amount
    }

    getBalance(){
        return this._balance
    }
}


const goridManusYeAccount =new Account(323,'sahad',20)
goridManusYeAccount.depositBalance(4)

console.log(goridManusYeAccount.getBalance())



}