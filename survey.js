const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's is your name?",(answer1) => {
  console.log(answer1);
  rl.question("What's an activity you like doing?",(answer2) => {
    console.log(answer2);
    rl.question("What do you listen to while doing that?", (answer3) => {
      console.log(answer3);
      rl.question("which meal is your favourite (eg: dinner, brunch, etc.)?", (answer4) => {
        console.log(answer4);
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          console.log(answer5);
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            console.log(answer6);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!?", (answer7) => {
              console.log(answer7);
              console.log(`Here is your profile:
              ${answer1} loves listening to ${answer3} while doing ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});








