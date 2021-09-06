var readlineSync = require("readline-sync");
var name = readlineSync.question("Your name please  ");
var score = 0;
console.log("Welcome " + name+" !");
console.log("This will test you how well you know me " + name);

function play(question,answer,i){
  // console.log(question);
  var userInput = readlineSync.question(question);
  if(userInput.toUpperCase() === answer.toUpperCase()){
    if(i===questions.length-1){
      console.log("You are right !");
      score++;
      console.log("Thanks for playing the quiz "+ name);
      console.log("Your Final Score is : "+ score);
    }
    else{
    console.log("You are right !");
    score++;
    console.log("Score is : "+ score);
    }
  }
  else{
    if(i===questions.length-1){
      console.log("Sorry! You are wrong ");
      console.log("Thanks for playing the quiz "+ name);
      console.log("Your Final Score is : "+ score);
    }
    else{
    console.log("Sorry! you are wrong");
    console.log("Score is : "+score);
  }
  }
}

var questions = [
  {question:"Where do I live? ",answer: "Vizag"},
  {question:"At what place i have studied ? ", answer:"Vizag"},
  {question:"What is my favourite movie? ", answer:"Shawshank Redemption"},
  {question:"What is my favourite color? ", answer:"Blue"},
  {question:"What is my favourite place? ", answer:"Andaman"}
  ]

  for(var i=0; i<questions.length;i++){
    play(questions[i].question,questions[i].answer,i);
  }