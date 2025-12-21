// datatypes should be same during comparisons.

console.log(null > 0);   // false    (these types of conversions can confuse you)
console.log(null == 0);  //false
console.log(null >= 0);  //true


//comparisons and equality check are two different things.
// strict check "===", checks value strictly means checks its datatype also.