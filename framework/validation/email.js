var checkMail = function(email) {
    var regexValidation = /^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/;
    return regexValidation.test(email);
}
  
var validateMail = function(email) {
    var valido = checkMail(email);
    return valido;
}