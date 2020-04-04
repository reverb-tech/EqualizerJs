/* 
Only accepts decimal number pattern.
*/
var transformDecimalNumber = function(number, event) {
    switch (event.keyCode) {
        case 8:  
        case 9:  // Tab
        case 13: // Enter
        case 37: // Left
        // case 38: // Up
        case 39: // Right
        // case 40: // Down
            return;
    }

    if (number == undefined ||
        number == '')
        return;

    var formatedMask = "";
    if (validateNumberDecimal(number)) {
        // formatedMask = number + formatedMask;
        // var numeroCheio = number.toString();
        var interactWithoutSc = number.replace(",", "");
        interactWithoutSc = interactWithoutSc.replace(".", "");
        var interact = interactWithoutSc.split('');

        for(i=0;i<interact.length;i++){
            console.log(interact[i]);
// 0,00 (4)
            // formatedMask += number;

            // 0.000.000 ,00
            // 0000000000

            if (i==0) //4
                formatedMask += interactWithoutSc[i];
            if (i==1) //45
                formatedMask = "," + formatedMask + interactWithoutSc[i];
            if (i==2){ //4,50
                formatedMask = formatedMask.substring(1, 2) +
                    "," + formatedMask.substring(2, 3) + interactWithoutSc[i];
            }
            else if (i==5)
                formatedMask = "." + formatedMask + interactWithoutSc[i];
            // else {
            //     formatedMask += interactWithoutSc[i];
            // }
                // formatedMask = numeroCheio.toString().substring(i, );
            // if (i>4)
            //     formatedMask = "," + formatedMask;
        }
    }
    // formatedMask = parseFloat(number).toFixed(2);
    // if (validateNumberDecimal(number)) {
        
    //     // if (formatedMask.length < 2) {
    //     //     formatedMask += number;
    //     // } else if(formatedMask.length == 2) {
    //     //     formatedMask += number;
    //     //     formatedMask = "," + formatedMask;
    //     // } else {
    //     //     formatedMask = number + formatedMask;
    //     // }
    // } 
    
    return formatedMask;
}