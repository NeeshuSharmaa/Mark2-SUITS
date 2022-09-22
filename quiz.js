const ask = require("readline-sync");
const chalk = require("chalk");
score=0
var playerName = ask.question("Hey bud! What's your name? (❁´◡`❁)")
console.log("Hello" + playerName +"! Obsessed with the SUITS? Let's get you litup.");
console.log("\n");

const questions = [{
  question: `What is Harvey's middle name?
a. Richard
b. Reginald 
c. Gordon
d. Spectar`,
    answer: "b",
    oncorrect: "Let's see what else do you know.",
    onwrong: "I see, you know alot about Suits -_-",
  },
  {
    question: `To where does Jessica want to follow Jeff Malone?
a. toronto
b. chicago 
c. los angles 
d. boston`,
    answer: "b",
    oncorrect: "Let's see what else do you know.",
    onwrong: "I see, you know alot about Suits -_-",
  },
  {
    question: `What was the profession of Harvey's dad? 
  a. baseball player
  b. lawyer
  c. musician
  d. singer`,
    answer: "c",
    oncorrect: "That was easy",
    onwrong: "You should know that he was a saxophone player:|",
  },
  {
    question: `Which company does Tony Gianopolous want to take over?
  a. Sanders International
  b. Coastal Motors
  c. Mckerson Motors
  d. Hessington Oil`,
    answer: "d",
    oncorrect: "Ooooh! Quite sharp memory you have.",
    onwrong: "Hessington Oil it was -_-",
  },{
  question: `Donna Has "A Body Like Elizabeth Hurley And The Sass Of _____"
  a. Sarah Silverman
  b. Joan Rivers
  c. Maggie Tatcher`, 
    answer: "c",
    oncorrect: "Yehee! ╰(*°▽°*)╯",
    onwrong: "You don't about Donna and you say you love Suits? Quite Hurtful! →_→"
  },
];

for (var i=0; i<questions.length; i=i+1){
  play(questions[i])
}
// questions.forEach((qa) => play(qa));
finish(); 

function play(qa) {
  // console.log(qa.question)
  console.log(chalk.bold(qa.question));
  ans = ask.question();
  if (ans.toLowerCase() == qa.answer) {
    console.log(chalk.bgKeyword("green")("CORRECT!"), qa.oncorrect);
    score++;
  } else console.log(chalk.bgKeyword("red")("WRONG!"), qa.onwrong);

  console.log("Score: ", score);
  console.log("________________________\n");
}

function finish() {
  console.log(
    chalk.bgMagenta(
      "\nQUIZ COMPLETED, YOU SCORED " + score + " out of " + questions.length
    )
  );
}
