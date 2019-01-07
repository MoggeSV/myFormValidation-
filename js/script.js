$(function(){

    $('#inputAge').click(function () {
        for (let i = 2019; i > 1919; i--) {
            $('#inputAge').append('<option class="ageOption">' + i + '</option>');
        }
    });
    

    $('#inputFirstName').on('change', function(){
        let input = $(this);
         
        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
            
        } else{
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
            //$('#alertRow').addClass("alert alert-danger")
        }
        
    });

    $('#inputLastName').on('change', function(){
        let input = $(this);
         
        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else{
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });


    $('#inputEmail').on('change', function() {      
        let input = $(this);

        if(validateEmail(input.val())) {          
            input.removeClass('is-invalid').addClass('is-valid');
            console.log('Please enter a valid email address.');
        } else {
            input.addClass('is-invalid');
        }

        return false;
    });

    function validateEmail(email) {
        let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }

    $('#inputPassword').on('change', function(){
        let input = $(this);
         
        if (input.val().length > 7) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else{
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });
    
    $('#inputAddress').on('change', function(){
        let input = $(this);
         
        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else{
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });

    $('#inputCity').on('change', function(){
        let input = $(this);
         
        if (input.val().length > 1) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else{
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });

    $('#inputZip').on('change', function(){
        let input = $(this);
         
        if (input.val().length == 5) {
            console.log('Fungerar');
            $(this).removeClass("is-invalid").addClass("is-valid");
        } else{
            console.log('Fungerar inte');
            $(this).removeClass("is-valid").addClass("is-invalid");
        }
    });




    


});