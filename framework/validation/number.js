var checkIsNumber = function(number) {
    var regexValidation = /^[0-9]*$/;
    return regexValidation.test(number);
}
  
var validateNumber = function(number) {
    return checkIsNumber(number);
}

var checkIsDecimal = function(number) {
    var regexValidation = /^(\d*\,)?\d+$/;
    return regexValidation.test(number);
}

var validateNumberDecimal = function(number) {
    return checkIsDecimal(number);
}