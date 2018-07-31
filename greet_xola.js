
const chalk = require('chalk');
//import the greet module that is in the current folder
const hello = require('./greet');

const styledMessage = chalk.bgGreen.black(hello('Lani'));
console.log(styledMessage)

var figlet = require('figlet');
var greet = require('./greet');

figlet('Hello Lani!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});
