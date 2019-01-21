$(function () {
    'use strict';

    //functions

    $('#inputAge').ready(function () {
        for (let i = 2019; i > 1919; i--) {
            $('#inputAge').append('<option class="ageOption">' + i + '</option>');
        }
    });

    function isValid(element, validClass = "is-valid", invalidClass = "is-invalid") {
        $(element).addClass(validClass);
        $(element).removeClass(invalidClass);
    }

    function isInvalid(element, validClass = "is-valid", invalidClass = "is-invalid") {
        $(element).addClass(invalidClass);
        $(element).removeClass(validClass);
    }

    //Text inputs

    $("#inputFirstName").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
            return false;
        } else {
            isValid(this);
            return true;
        }
    });

    $("#inputLastName").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
        } else {
            isValid(this);
        }
    });

    $("#inputAddress").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
        } else {
            isValid(this);
        }
    });

    $("#inputCity").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
        } else {
            isValid(this);
        }
    });

    $("#inputTextArea").blur(function () {
        if ($(this).val().length < 20) {
            isInvalid(this);
        } else {
            isValid(this);
        }
    });

    //Email, password, postalnumber REGEX test


    function validateEmail(email) {
        
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email)) {
            isValid($("#inputEmail"));
            return true;
        } else {
            isInvalid($("#inputEmail"));
            return false;
        }
    };

    
    function validatePassword(password) {
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        if (regex.test(password)) {
            isValid($("#inputPassword"));
            return true;
        } else {
            isInvalid($("#inputPassword"));
            return false;
        }
    };

    function validateZip(zip) {
        let regex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]{5,}$/;
        if (regex.test(zip)) {
            isValid($("#inputZip"));
            return true;
        } else {
            isInvalid($("#inputZip"));
            return false;
        }
        
    };

    $('#inputEmail').blur(function () {

        if (validateEmail($(this).val())) {
            isValid(this);
        } else {
            isInvalid(this);
        }
    });

    $('#inputPassword').blur(function () {

        if (validatePassword($(this).val())) {
            isValid(this);
        } else {
            isInvalid(this);
        }
    });

    $('#inputZip').blur(function () {
        if (validateZip($(this).val())) {
            isValid(this);
        } else {
            isInvalid(this);
        }
    });

    //Select validation

    $('#inputAge').on('change', function () {
        let age = $('#inputAge option:selected').val();


        if (age == "" || age == "Välj ditt födelseår") {
            isInvalid(this);
        } else {
            isValid(this);
        }
    });

    $("#inputAge").blur(function () {
        let age = $('#inputAge option:selected').val();
        if (age == "" || age == "Välj ditt födelseår") {
            isInvalid(this);
        } else {
            isValid(this);
        }
    });

    //Radiobuttons

    $('input[name=customRadio]').on('change', function () {
        if ($('input[name=customRadio]:checked').length == 0) {

            isInvalid(($('input[name=customRadio]')));
        } else {
            isValid(($('input[name=customRadio]')));
        }
    });

    $('input[name=customRadio]').blur(function () {
        if ($('input[name=customRadio]:checked').length == 0) {

            isInvalid(($('input[name=customRadio]')));
        } else {
            isValid(($('input[name=customRadio]')));

        }
    });

    //checkbox and submit button

    $('#inputCheck').on('change', function () {
        if ($(this).is(':checked')) {
            $(this).removeClass("is-invalid").addClass("is-valid");
            $('#submit').prop("disabled", false);
        } else {
            $(this).removeClass("is-valid").addClass("is-invalid");
            $('#submit').prop("disabled", true);
        }

    });

    //submit & validation

    function checkInputlength(id, size) {

        if ($(id).val().length < size) {
            isInvalid(id);
            return false;
        } else {
            isValid(id);
            return true;
        }
    }
    
    function checkSelect() {
        if ($('#inputAge option:selected').val()) {
            isValid("#inputAge");
            return true;
        } else {
            isInvalid("#inputAge");
            return false;
        }
    }

    function checkRadio() {
        
        if ($('input[name=customRadio]:checked').length == 1) {
            isValid(($('input[name=customRadio]')));
            return true;
        } else {
            isInvalid(($('input[name=customRadio]')));
            return false;
        }
    }


    $("#submit").on("click", function (){

        if (checkInputlength("#inputFirstName", 2) && checkInputlength("#inputLastName", 2) && validateEmail($("#inputEmail").val()) && validatePassword($("#inputPassword").val()) && checkInputlength("#inputAddress", 2) && checkInputlength("#inputCity", 2) && validateZip($("#inputZip").val()) && checkSelect() && checkRadio() && checkInputlength("#inputTextArea", 20)) {
            
        }else{
            isInvalid("#inputCheck");
            $("#inputCheck").prop("checked", false);
            $('#submit').prop("disabled", true);
            event.preventDefault();
            event.stopPropagation();
        }
    });

    
});


































