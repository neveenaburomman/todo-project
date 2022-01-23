console.log("i'm alive");
var yourName = prompt("What is your Name?");
var yourGender = prompt("What is your Gender?");
var yourAge = prompt("What is your Age?");

if (yourAge<=0) {

    alert(" your age is not correct");

} 

confirm("Press to confirm :)");

switch(yourGender){
    case "female": 
    alert(" welcome Ms "+ yourName+ " !");
    break;
    case "male": 
    alert(" welcome Mr "+ yourName+ " !");
    break;

    default:
alert(" welcome "+ yourName+ " !");
}


var myArray =[];
function questionOne(){


  let answer = prompt("Are you a graduate ?(yes /no)");
  if (answer == null || answer == "") 
  {
    answer = "invalid";
    myArray.push(answer);
  } 
  else 
  {
    myArray.push(answer);
  }
  
}

function questionTwo(){

let answer2 = prompt("do you love programming ?(yes /no)");
  if (answer2 == null || answer2 == "") 
  {
    answer2 = "invalid";
    myArray.push(answer2);
  } 
  else 
  {
    myArray.push(answer2);
  }
  
}
function questionThere(){
 let answer3 = prompt("do you want to learn javascript ?(yes /no)");
  if (answer3 == null || answer3 == "") 
  {
    answer = "invalid";
    myArray.push(answer3);
  } 
  else 
  {
    myArray.push(answer3);
  }
}

questionOne();
questionTwo();
questionThere();
console.log(myArray);



 