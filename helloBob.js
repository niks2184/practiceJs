var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

 rl.question('What is your name?', (name) => {
   if(name == "bob" || name == "alice")
      {console.log(`Hello ${name}`);}
});