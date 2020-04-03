/* 
Transform a datetime dd/MM/yyyy pattern.
*/
var transformDatetime = function(number, event) {
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

    number = number.replace('/', '');
    number = number.replace('/', '');
    console.log('numero:' + number);

    if (!validateNumber(number)) {
        console.log('não é um número');
        var remove = number.toString().substring(0, number.length - 1);
        return formatarDatetimeMask(remove);
    }

    return formatarDatetimeMask(number);
}

var formatarDatetimeMask = function(number) {
    var formatedMask = '';

    var charArr = number.toString().split('');
    for (j=0; j<8; j++) {
        if ( (j == 2) || (j == 4)) {
            if (charArr[j] != undefined) {
                formatedMask += "/" + charArr[j];
            }
        } else if (!(j == 2) && !(j == 4)) {
            if (charArr[j] != undefined) {
                formatedMask += charArr[j];
            }
        }
    }
    return formatedMask;
}