var assert = require('assert');

var RomanNumerals = require('../RomanNumerals');

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return I when given 1', function () {
            assert.equal("I", RomanNumerals.Convert(1));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 1 when given I', function () {
            assert.equal(1, RomanNumerals.Convert("I"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return II when given 2', function () {
            assert.equal("II", RomanNumerals.Convert(2));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 2 when given II', function () {
            assert.equal(2, RomanNumerals.Convert("II"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return III when given 3', function () {
            assert.equal("III", RomanNumerals.Convert(3));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 3 when given III', function () {
            assert.equal(3, RomanNumerals.Convert("III"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return IV when given 4', function () {
            assert.equal("IV", RomanNumerals.Convert(4));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 4 when given IV', function () {
            assert.equal(4, RomanNumerals.Convert("IV"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return V when given 5', function (
        ) {
            assert.equal("V", RomanNumerals.Convert(5));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 5 when given V', function () {
            assert.equal(5, RomanNumerals.Convert("V"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return IX when given 9', function (
        ) {
            assert.equal("IX", RomanNumerals.Convert(9));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 9 when given X', function () {
            assert.equal(9, RomanNumerals.Convert("IX"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return X when given 10', function (
        ) {
            assert.equal("X", RomanNumerals.Convert(10));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return XVII when given 17', function (
        ) {
            assert.equal("XVII", RomanNumerals.Convert(17));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 17 when given XVII', function (
        ) {
            assert.equal(17, RomanNumerals.Convert("XVII"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return XXX when given 30', function (
        ) {
            assert.equal("XXX", RomanNumerals.Convert(30));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return XXVI when given 26', function (
        ) {
            assert.equal("XXVI", RomanNumerals.Convert(26));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return L when given 50', function (
        ) {
            assert.equal("L", RomanNumerals.Convert(50));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return XCIX when given 99', function (
        ) {
            assert.equal("XCIX", RomanNumerals.Convert(99));
        });
    });
});


describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return C when given 100', function (
        ) {
            assert.equal("C", RomanNumerals.Convert(100));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return D when given 500', function (
        ) {
            assert.equal("D", RomanNumerals.Convert(500));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return CMXCIX when given 999', function (
        ) {
            assert.equal("CMXCIX", RomanNumerals.Convert(999));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 999 when given CMXCIX', function (
        ) {
            assert.equal("999", RomanNumerals.Convert("CMXCIX"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return M when given 1000', function (
        ) {
            assert.equal("M", RomanNumerals.Convert(1000));
        });
    });
});


describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return CLXXVI when given 176', function (
        ) {
            assert.equal("CLXXVI", RomanNumerals.Convert(176));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 176 when given CLXXVI', function (
        ) {
            assert.equal(176, RomanNumerals.Convert("CLXXVI"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return MMMMDCCLXXXIX when given 4789', function (
        ) {
            assert.equal("MMMMDCCLXXXIX", RomanNumerals.Convert(4789));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return MMMMDCCLXXXIX when given MMMMDCCLXXXIX', function (
        ) {
            assert.equal("4789", RomanNumerals.Convert("MMMMDCCLXXXIX"));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return MMMMCM when given 4900', function (
        ) {
            assert.equal("MMMMCM", RomanNumerals.Convert(4900));
        });
    });
});


describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return MMMMCMXCIX when given 4999', function (
        ) {
            assert.equal("MMMMCMXCIX", RomanNumerals.Convert(4999));
        });
    });
});

describe('RomanNumerals', function () {
    describe('#Convert()', function () {
        it('should return 4999 when given MMMMCMXCIX', function (
        ) {
            assert.equal("4999", RomanNumerals.Convert("MMMMCMXCIX"));
        });
    });
});
