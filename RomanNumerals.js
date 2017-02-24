function Convert(numberToConvert) {
    if (isNaN(parseInt(numberToConvert))) {
        return ConvertFromRomanToInt(numberToConvert);
    }
    return ConvertFromIntToRoman(numberToConvert);
}

function ConvertFromRomanToInt(numberToConvert) {
    let result = 0;
    for (i = 0; i < numberToConvert.length; i++) {
        let number;
        let aggregationOfTheNextTwoCharacters = numberToConvert[i] + numberToConvert[i + 1];
        if (romanDictionary.indexOf(aggregationOfTheNextTwoCharacters) != -1) {
            number = romanDictionary.indexOf(aggregationOfTheNextTwoCharacters);
            i = i + 1;
        }
        else {
            number = romanDictionary.indexOf(numberToConvert[i]);
        }
        result += number;
    }
    return result;
}
function ConvertFromIntToRoman(numberToConvert) {
    let differenceLeftToConvert = numberToConvert;
    let romanNumber = "";
    while (differenceLeftToConvert != 0) {
        let literalNumberToAdd = GetLowerMatchSymbol(differenceLeftToConvert);
        let step = GetLowerMatchNumericValue(differenceLeftToConvert);
        romanNumber += literalNumberToAdd;
        differenceLeftToConvert = differenceLeftToConvert - step;
    }
    return romanNumber;
}
function GetLowerMatchNumericValue(difference) {
    return GetIndexOfLowerMatch(difference);
}
function GetLowerMatchSymbol(difference) {
    let indexOfLowerMatch = GetIndexOfLowerMatch(difference);
    return romanDictionary[indexOfLowerMatch];
}
function GetIndexOfLowerMatch(number) {
    let matches = [];
    for (key in romanDictionary) {
        if (number >= parseInt(key)) {
            matches.push(parseInt(key));
        }
    }
    return Math.max.apply(Math, matches);
}

var romanDictionary = [];
romanDictionary[1000] = "M";
romanDictionary[900] = "CM";
romanDictionary[500] = "D";
romanDictionary[100] = "C";
romanDictionary[90] = "XC";
romanDictionary[50] = "L";
romanDictionary[10] = "X";
romanDictionary[9] = "IX";
romanDictionary[5] = "V";
romanDictionary[4] = "IV";
romanDictionary[1] = "I";

module.exports = {
    Convert: Convert
}
