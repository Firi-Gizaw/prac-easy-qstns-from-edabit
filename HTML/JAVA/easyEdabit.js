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