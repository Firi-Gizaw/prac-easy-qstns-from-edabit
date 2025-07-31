/*1) Bitwise Operations
A decimal number can be represented as a sequence of bits. To illustrate:

6 = 00000110
23 = 00010111
From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

bitwiseAND(6, 23) ➞ 00000110

bitwiseOR(6, 23) ➞ 00010111

bitwiseXOR(6, 23) ➞ 00010001*/function bitwiseAND(n1, n2) {
	var x= n1.toString(2);
	var y=n2.toString(2);
	return x&y;
	
	
}

function bitwiseOR(n1, n2) {
	var x= n1.toString(2);
	var y=n2.toString(2);
	return x|y;
	
}

function bitwiseXOR(n1, n2) {
	
	var x= n1.toString(2);
	var y=n2.toString(2);
	return x^y;
}
var a= bitwiseAND(6,23);
console.log(a);
var b=bitwiseOR(6,23);
console.log(b);
var c=bitwiseXOR(6,23);
console.log(c);

/* 2)Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300
Notes
Expect any positive number between 1 and 1000*/
function sum(x){
	if(isNaN(x)){
		return "pls enter only nums";
	}
	else if(x<0){
		return "enter only positive nums";
	}
	else{

	
	var total=0;
	for(i=0;i<=x ;i++){

		total=total+i;
		
	}
	return total;
}
}

var s=sum(9);
console.log(s);

/*3)Matchstick Houses
This challenge will help you interpret mathematical relationships both algebraically and geometrically.

Matchstick Houses, Steps 1, 2 and 3

Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

Examples
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21

matchHouses(87) ➞ 436 */

function match(n){
return (n*6) - (n-1)
}
var a=match(87);
console.log(a);
