$(function() {
    $("#create_account").click(function() {
        // Validates First and Last Name entries
        var fname = $("#Fname").val();
        var lname = $("#Lname").val();

        if (fname == "" && lname == "") {
            event.preventDefault();
            $("#Fname").css("border", "1px solid red");
            $("#Fname_error").text("First name is required.");
            $("#Lname").css("border", "1px solid red");
            $("#Lname_error").text("Last name is required.");
        } else if (fname == "") {
            event.preventDefault();
            $("#Fname").css("border", "1px solid red");
            $("#Fname_error").text("First name is required.");
        } else if (lname == "") {
            event.preventDefault();
            $("#Lname").css("border", "1px solid red");
            $("#Lname_error").text("Last name is required.");
        } else {
            $(".top").css("border", "1px solid green");
            $("#Lname_error").text("");
            $("#Fname_error").text("");
        }

        // Validates email input
        var email = $("#email").val();
        var regexp = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,8}).(.[a-z]{2,8})?$/;

        if (email == "") {
            event.preventDefault();
            $("#email").css("border", "1px solid red");
            $("#email_error").text("Email can not be left blank.");
        } else if (regexp.test(email) == false) {
            event.preventDefault();
            $("#email").css("border", "1px solid red");
            $("#email_error").text("Email is not valid.");
        } else {
            $("#email").css("border", "1px solid green");
            $("#email_error").text("");
        }

        // Validates password
        var pwd1 = $("#pwd1").val();
        var pwd2 = $("#pwd2").val();
        var pwd1_lower = pwd1.toLowerCase();
        var regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        if (pwd1 == "") {
            event.preventDefault();
            $("p").text("Password can not be left blank.").css("color", "red");
            $(".bottom").css("border", "1px solid red");
        } else if (pwd1_lower == "password") {
            event.preventDefault();
            $("p").text("Password can not be \'password\'").css("color", "red");
        } else if (regex.test(pwd1) == false) {
            event.preventDefault();
            $("p").text("Password must be 8 - 20 characters long. Must contain uppercase and lowercase letters, at least one number (0-9) and symbol.").css("color", "red");
            $(".bottom").css("border", "1px solid red");
        } else if (pwd1 != pwd2){
            event.preventDefault();
            $("p").text("The passwords do not match, please re-enter").css("color", "red");
            $(".bottom").css("border", "1px solid red");
        }  else {
            $("p").text("");
            $(".bottom").css("border", "1px solid green");
        }

        // Validates T&C checkbox
        var terms = $('input[type="checkbox"]');
        if (terms.prop("checked") == false) {
            event.preventDefault();
            $("#Terms_error").text("You must agree to the Terms & Conditions");
        }
    });

    // Show / Hide Password 
        $("#hide2").click(function() {
            if($(this).hasClass("fa fa-eye-slash fa-lg")) {
                $(this).removeClass("fa fa-eye-slash fa-lg");
                $(this).addClass("fa fa-eye fa-lg");
                $(".bottom").attr("type","text");
            } else {
                $(this).removeClass("fa fa-eye fa-lg");
                $(this).addClass("fa fa-eye-slash fa-lg");
                $(".bottom").attr("type","password");
            }
        })

});



