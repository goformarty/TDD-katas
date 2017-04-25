function RomanNumerals() {}

RomanNumerals.prototype.convert = function(n) {
	var roman = "";
	var equivalents = [
		["M", 1000],
		["CM", 900],
		["D", 500],
		["CD", 400],
		["C", 100],
		["XC", 90],
		["L", 50],
		["XL", 40],
		["X", 10],
		["IX", 9],
		["V",5],
		["I",1]
	];

	while (n>=10) {
		roman += "X";
		n-=10;
	}
	while (n>=9) {
		roman = "IX";
		n -= 9;
	}
	while (n>=5) {
		roman = "V";
		n -= 5;
	}
	while (n>=4) {
		roman += "IV";
		n -= 4;
	}
	while (n>=1) {
		roman += "I";
		n -= 1;
	}
	return roman;
};