#!/usr/bin/env node

var fs            = require('fs');
var outfile       = 'part2.txt';
var firstPrime    = 2;
var primeNumbers  = [firstPrime];
var currentNumber = firstPrime;

while (primeNumbers.length < 100) {
  currentNumber += 1; 
  var prime = true;
  
  for (var i = firstPrime; i < currentNumber - 1; ++i) {
    if ((currentNumber % i) == 0) {
      prime = false;
      break;
    }
  }
  
  if (prime) {
    console.log('Found a prime! ' + currentNumber);
    primeNumbers.push(currentNumber);
  }
}

var out = primeNumbers.join(',');
fs.writeFileSync(outfile, out);  
