$(function () {
   'use strict';

    let formValid = {
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        address: false,
        city: false,
        zip: false,
        birthyear: false,
        occupation: false,
        textarea: false
    };

    //submit

    $("#submit").click(function (event) {
        console.log(formValid.occupation);
        if (formValid.firstname == false || formValid.lastname == false || formValid.email == false || formValid.password == false || formvalid.address == false || formValid.city == false || formValid.zip == false || formValid.birthyear == false || formValid.occupation == false || formValid.textarea == false) {

            event.preventDefault();
            event.stopPropagation();
            $('#alertRow').addClass("alert alert-danger");
            $('#alertText').show();
            
        }
            
    });



    //functions

    $('#inputAge').ready(function () {
        for (let i = 2019; i > 1919; i--) {
            $('#inputAge').append('<option class="ageOption">' + i + '</option>');
        }
    });

    function isValid(element, validClass = "is-valid", invalidClass= "is-invalid") {
        $(element).addClass(validClass);
        $(element).removeClass(invalidClass);
    }

    function isInvalid(element, validClass = "is-valid", invalidClass= "is-invalid") {
        $(element).addClass(invalidClass);
        $(element).removeClass(validClass);
    } 

    //Text inputs

    $("#inputFirstName").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
            formValid.firstname = false;
        } else {
            isValid(this);
            formValid.firstname = true;
        }
    });

    $("#inputLastName").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
            formValid.lastname = false;
        } else {
            isValid(this);
            formValid.lastname = true;
        }
    });

    $("#inputAddress").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
            formValid.address = false;
        } else {
            isValid(this);
            formValid.address = true;
        }
    });

    $("#inputCity").blur(function () {
        if ($(this).val().length < 2) {
            isInvalid(this);
            formValid.city = false;
        } else {
            isValid(this);
            formValid.city = true;
        }
    });

    $("#inputTextArea").blur(function () {
        if ($(this).val().length < 20) {
            isInvalid(this);
            formValid.textarea = false;
        } else {
            isValid(this);
            formValid.textarea = true;
        }
    });

    //Email, password, postalnumber REGEX test


    function validateEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    };

    function validatePassword(password) {
        let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
        return regex.test(password);
    };

    function validateZip(zip) {
        let regex = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]{5,}$/;
        return regex.test(zip);
    };

    $('#inputEmail').blur(function () {

        if (validateEmail($(this).val())) {
            isValid(this);
            formValid.email = true;
        } else {
            isInvalid(this);
            formValid.email = false;
        }
    });

    $('#inputPassword').blur(function () {

        if (validatePassword($(this).val())) {
            isValid(this);
            formValid.password = true;
        } else {
            isInvalid(this);
            formValid.password = false;
        }
    });

    $('#inputZip').blur(function () {
         if (validateZip($(this).val())) {
                isValid(this);
                formValid.zip = true;
            } else {
                isInvalid(this);
                formValid.zip = false;
            }
    });

    //Select validation

    $('#inputAge').on('change', function () {
        let age = $('#inputAge option:selected').val();
        
        
        if (age == "" || age == "Välj ditt födelseår") {
            isInvalid(this);
            formValid.birthyear = false;
        } else {
            isValid(this);
            formValid.birthyear = true;
        }
    });

    $("#inputAge").blur(function () {
        let age = $('#inputAge option:selected').val();
        if (age == "" || age == "Välj ditt födelseår") {
            isInvalid(this);
            formValid.birthyear = false;
        } else {
            isValid(this);
            formValid.birthyear = true;
        }
    });

    //Radiobuttons

    $('input[name=customRadio]').on('change', function () {
        if ($('input[name=customRadio]:checked').length == 0) {
            console.log($('input[name=customRadio]:checked').length);
            isInvalid(($('input[name=customRadio]')));
            formValid.occupation = false;
        } else {
            isValid(($('input[name=customRadio]')));
            console.log($('input[name=customRadio]:checked').length);
            formValid.occupation = true;
        }
     });

     $('input[name=customRadio]').blur(function () {
        if ($('input[name=customRadio]:checked').length == 0) {
            console.log($('input[name=customRadio]:checked').length);
            isInvalid(($('input[name=customRadio]')));
            formValid.occupation = false;
            console.log(formValid.occupation);
        } else {
            isValid(($('input[name=customRadio]')));
            console.log($('input[name=customRadio]:checked').length);
            formValid.occupation = true;
            console.log(formValid.occupation);
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



    /*
    window.addEventListener("load", function() {
        var forms = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                if(form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });
    }, false);
    */
});


































