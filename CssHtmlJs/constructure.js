// function My(name,age){
//     this.name=name;
//     this.age=age
//    this.greet=function(){
//     return console.log(`hello my name is ${this.name}`)
//    }
// }

// let mybio=new My("sourabh","age")
// console.log(mybio.greet())

// function Bankaccount(name,amount){
//     this.name=name,
//       this.amount=amount
  
//     this.deposit=function (amount){
//       this.amount+=amount
//     }
  
//     this.withdraw=function(money){
//       if(money>this.amount){
//         return console.log("Insufficient Balance")
//       }
//       else{
//         this.amount-=money
//       }
//     }
//   }
  
//   let myAccount = new  Bankaccount("sourabh",100)
//   // console.log(myAccount)
//   // myAccount.deposit(100)
//   // console.log(myAccount)
//   // myAccount.withdraw(1000)
  
//   let my =new  Bankaccount("Shubham",10000)
  
//   // console.log(my)
//   // my.withdraw(2000)
//   // console.log(my)
//   // my.withdraw(20000)
  
//   function amount(...arg){
//     let sum=0
//     console.log(arg)
//     for(let i of arg){
//       sum+=i.amount
//     }
//     console.log(sum)
//   }
//   amount(my,myAccount)

function MyAccount(name,amount){
    this.name=name
    this.amount=amount

    this.deposit=function deposit(depositAmount){
        this.amount=this.amount+depositAmount
        return console.log(`${this.name} account has been created ${depositAmount} the new balance is ${this.amount}`)
    }


    this.withdraw=function withdraw(withdrawAmount){
        if(withdrawAmount>amount){return console.log("indufficient balace")}
        this.amount=this.amount+withdrawAmount
        return console.log(`${this.name} account has been Withdrawn  ${withdrawAmount} the new balance is ${this.amount}`)
    }
}

MyAccount.getTotalAmount=function(...arg){
    let totalBalance = 0;
    for (let account of arg) {
     
      totalBalance += +account.balance;
    }
    return totalBalance;
  }

let coustomer1=new MyAccount("sourabh",1000)

coustomer1.deposit(1000)