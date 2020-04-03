# EqualizerJs
Free Js Functions for general purposes

Pre-built functions:

//Validação de E-mail
<!--HTML-->

<input type="text" 
    name="txtEmail" 
    id="txtEmail" />
<button id="btnValidateEmail" type="button">
    Validar
</button>
<span id="validationMsg" style="display: none">O e-mail é valido.</span>


//Js
//e-mail validation
$("#btnValidateEmail").click(function() {
    var valido = validateMail($("#txtEmail").val());
    
    if (!valido) 
        alert('E-mail inválido');
    else {
        $("#validationMsg").attr("style", "display:block;");
        $("#validationMsg").addClass("label label-success");
    }
});

//Validação de Número
<!--HTML-->
<div class="row">
    <h3>Validação Número</h3>
    <input type="text" 
        name="txtNumber" 
        id="txtNumber" />
    <button id="btnValidateNumber" type="button">
        Validar
    </button>
    <span id="validationNumberMsg" style="display: none">O número é valido.</span>
</div>

//JS
// Validação Número
$("#btnValidateNumber").click(function() {
    var valido = validateNumber($("#txtNumber").val());
    
    if (!valido) 
        alert('Número inválido');
    else {
        $("#validationNumberMsg").attr("style", "display:block;");
        $("#validationNumberMsg").addClass("label label-success");
    }
});

//JS
//phone validation
$("#txtFone").keyup(function(e) {
    var fone = $("#txtFone").val();
    var formatado = transformPhoneNumber(fone, e);
    $("#txtFone").val(formatado);
});

//celular
$("#txtMobile").keyup(function(e) {
    var fone = $("#txtMobile").val();
    var formatado = transformMobileNumber(fone, e);
    $("#txtMobile").val(formatado);
});

//número
$("#txtNumero").keyup(function(e) {
    var fone = $("#txtNumero").val();
    var formatado = transformIntegerNumber(fone, e);
    $("#txtNumero").val(formatado);
});

//Decimal
$("#txtDecimal").keyup(function(e) {
    var fone = $("#txtDecimal").val();
    var formatado = transformDecimalNumber(fone, e);
    $("#txtDecimal").val(formatado);
});

//Datetime
$("#txtData").keyup(function(e) {
    var fone = $("#txtData").val();
    var formatado = transformDatetime(fone, e);
    $("#txtData").val(formatado);
});
