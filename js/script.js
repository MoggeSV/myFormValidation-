$(function () {

    let formValid = {
        firstname: false,
        lastname: false,
        email: false,
        password: false,
        address: false,
        city: false,
        zip: false,
        birthyear: false,
        occupation: true,
        textarea: false
    };

    $('form').submit(function (e) {
    if (formValid.firstname == true /*&& formValid.lastname == true && formValid.email == true && formValid.password == true && formValid.address == true && formValid.city == true && formValid.zip == true && formValid.birthyear == true && formValid.occupation == true && formValid.textarea == true*/) {
        return;
    } else {
        $('#alertRow').addClass("alert alert-danger");
        $('#alertText').show();
    }
    e.preventDefault();
    });


    $('#inputAge').click(function () {
        for (let i = 2019; i > 1919; i--) {
            $('#inputAge').append('<option class="ageOption">' + i + '</option>');
        }
    });


    $('#inputFirstName').on('change', function () {
        let input = $(this);

        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.firstname = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.lastname = false;
            //$('#alertRow').addClass("alert alert-danger")
        }

    });

    $('#inputLastName').on('change', function () {
        let input = $(this);

        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.lastname = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.lastname = false;
        }
    });


    $('#inputEmail').on('change', function () {
        let input = $(this);

        if (validateEmail(input.val())) {
            input.removeClass('is-invalid').addClass('is-valid');
            formValid.email = true;
            console.log('Please enter a valid email address.');
        } else {
            input.addClass('is-invalid');
            formValid.email = false;
        }

        return false;
    });

    function validateEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    $('#inputPassword').on('change', function () {
        let input = $(this);

        if (input.val().length > 7) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.password = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.password = false;
        }
    });

    $('#inputAddress').on('change', function () {
        let input = $(this);

        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.address = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.address = false;
        }
    });

    $('#inputCity').on('change', function () {
        let input = $(this);

        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.city = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.city = false;
        }
    });

    $('#inputZip').on('change', function () {
        let input = $(this);

        if (input.val().length == 5) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.zip = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.zip = false;
        }
    });

    $('#inputAge').on('change', function () {
        let age = $('#inputAge option:selected').val();
        console.log(age);
        
        if (age == "" || age == "Choose your birthyear") {
            formValid.birthyear = false;
            $(this).removeClass("is-valid").addClass("is-invalid");
        } else {
            formValid.birthyear = true;
            $(this).removeClass("is-invalid").addClass("is-valid");
        }
    });

    $('#inputTextArea').on('change', function () {
        let input = $(this);

        if (input.val().length > 20) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            formValid.textarea = true;
        } else {
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            formValid.textarea = false;
        }
    });

    $('#inputCheck').on('click', function () {
        if ($(this).is(':checked')) {
            $(this).removeClass("is-invalid").addClass("is-valid");
            $('#submit').prop("disabled", false);
        } else {
            $(this).removeClass("is-valid").addClass("is-invalid");
            $('#submit').prop("disabled", true);
        }

    });





});