const readline = require('readline');
const { getStudentBotResponse } = require('./studentBot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("StudentBot: Hello! I can help you with college-related queries.");
askQuestion();

function askQuestion() {
  rl.question(" You: ", (input) => {
    const reply = getStudentBotResponse(input);
    console.log(" StudentBot:", reply);

 
    if (input.toLowerCase() === "bye" || input.toLowerCase() === "exit") {
      console.log(" StudentBot: Goodbye!");
      rl.close();
    } else {
      askQuestion(); 
    }
  });
}