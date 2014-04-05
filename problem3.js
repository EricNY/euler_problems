// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// works but needs optimizing. Use a library?

var isPrime = function(number){
  if ((number == 1)||(number == 2)) {
    return true;
  };
  for (var i = 2; i < number; i++) {
    if (number % i == 0){
      return false;
    }
  };
  return true;
}

var largestPrimeFactor = function(number){
  for (var i = 2; i < number; i++){
    if ( (number % i == 0) && (isPrime(number/i)) ){
      return number/i;
    };
  }
  return number;
};

console.log(largestPrimeFactor(600851475143));
