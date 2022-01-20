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


 