// A palindromic number reads the same both ways. The
// largest palindrome made from the product of two 2-digit
// numbers is 9009 = 91 × 99. Find the largest palindrome
// made from the product of two 3-digit numbers.

var isPalindrome = function(number){
  if ( number.toString().split("").reverse().join() == number.toString().split("").join() ){
    return true;
  }else{
    return false;
  }
};

var hasTwoFactorsOfThreeDigits = function(number){
  for(var i=100; i<=999; i++){
    var factor1 = i;
    var factor2 = number/i;
    if( (number%factor1 == 0) && (factor2.toString().length == 3 ) ){
      return true;
    }
  }
  return false;
};

var findLargestPalindrome = function(){
  for(var i = 998001; i >= 100000; i--){
    if( isPalindrome(i) && hasTwoFactorsOfThreeDigits(i) ){
      return i;
    }
  };

  return false;

};

console.log(findLargestPalindrome());

