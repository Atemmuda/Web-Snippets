//Variables to keep track of arrays of numbers
let factors = [];
let primeFactors = [];

// Finds the elements that make up of the factors of a given number
let n = new Number();
function findFactors(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
      //console.log(factors);
    }
  }
  return factors;
  //console.log("Prime numbers in " + n);
}

//finds out whether an element is prime or not
function isPrime(n) {
    let numberOfFactors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      numberOfFactors.push(i);
    }
  }if (numberOfFactors.length === 2) {
    return true
  }else
  return false
}

// count and return the number of prime numbers in the factors of an element
function primeCount(numeric){
numOfFactors = findFactors(numeric)
for(let k = 1; k <= numOfFactors.length; k++){
    let whetherPrime = isPrime(numOfFactors.at(k));
    if(whetherPrime === true)
    primeFactors.push(numOfFactors.at(k))
}
return primeFactors.length;
}

let factorValues = primeCount(75);

console.log(factorValues);
