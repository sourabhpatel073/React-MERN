class myObj{
    constructor(name,place){
      this.name=name;
      this.place=place;
    }
    greet(){
     return console.log(`hello  i am ${this.name} from ${this.place}`)
    }
  }
  
  let myBio=new myObj("Sourav","Bhopal")
  
//   console.log(myBio,myBio.greet())
  
  class myHobby extends myObj{
   constructor(name,place,hobby){
    super(name,place)
    this.hobby=hobby;
   
   }
   introduction(){
      super(greet)  
      return console.log(`i love ${this.hobby}`)
   }

    
  }

  let my=new myHobby("sourabh","bhopal","cricket")
  console.log(my.introduction())