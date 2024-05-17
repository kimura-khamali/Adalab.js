//conditions

/*const personsAge = (age) => {
    if(age > 18) {
        return "You are an adult";
    }else if(age<=13 && age <18) {
        return "You are a teenager";
    }else{
        return "You are a child";
    }
}
console.log(personsAge(18))*/

//for (initialvalue,ratio,how to iterate ++/--)

//switch cases
 const greeting = (dayOfTheWeek) => {
   switch(dayOfTheWeek){
    case `Monday`:
    console.log(`Hello Monday`);
    break;
 case `wednesday`:
      console.log(`Hello Monday`);
       break;
 case `Thursday`:
      console.log(`Hello Thursday`);
      break
 case `Friday`:
      console.log(`Hello Friday`);
      break;
default:
    console.log(`Not the day of the week`);
   }
    
 };
 greeting(`Monday`);
 greeting(`Wednesday`);
    