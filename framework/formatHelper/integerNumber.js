/* 
Only accepts integer number pattern.
*/
var transformIntegerNumber = function(number, event) {
    switch (event.keyCode) {
        case 8:  
        case 9:  // Tab
        case 13: // Enter
        case 37: // Left
        case 38: // Up
        case 39: // Right
        case 40: // Down
            return;
    }

    if (number == undefined ||
        number == '')
        return;

    var formatedMask = "";

    if (validateNumber(number)) {
        formatedMask += number;
    } else {
        var remove = number.toString().substring(0, number.length - 1);
        return remove;
    }
    
    return formatedMask;
}