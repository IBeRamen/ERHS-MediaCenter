/**
 * Omar Rahman
 * (c) omartech.me
 **/
$(document).ready(function () {

    $("#signin").validate({
        rules: {
            studentid: {
                required: true,
                minlength: 10,
                maxlength: 10,
                digits: true,
            }
        },
        messages: {
            studentid: {
                required: "Please enter your Student ID.",
                minlength: "Please enter at least 10 digits.",
                maxlength: "Please enter less than 10 digits.",
                valid: "Please enter a valid Student ID."
            }
        },
        submitHandler: function(form) {
            $.ajax({
                url: "../mediacenter/php/signin.php",
                type: "post",
                data: $(form).serialize(),
                success: function (response) {
                    if (response == "true") {
                        swal({
                            title: "Signed in!",
                            timer: 1600,
                            showConfirmButton: false,
                            type: "success"
                        });
                        $("#signin").each(function(){
                            this.reset();
                        });
                        $("div").removeClass("has-success");
                    }
                    else if (response == "false") {
                        swal({
                            title: "Error!",
                            text: "Invalid Student ID (Must start with 480).",
                            timer: 2400,
                            showConfirmButton: false,
                            type: "error"
                        });
                        $("#signin").each(function(){
                            this.reset();
                        });
                        $("div").removeClass("has-success");
                    }
                    else {
                        swal({
                            title: "Unknown Error",
                            timer: 2000,
                            showConfirmButton: false,
                            type: "error"
                        });
                    }
                }
            });
        },

        errorPlacement: function (error, element) {
            $(element).closest(".form-group").find(".help-block").html(error.html());
        },
        highlight: function (element) {
            $(element).closest(".form-group").removeClass("has-success").addClass("has-error");
        },
        success: function (element, lab) {
            $(lab).addClass("valid").closest(".form-group").removeClass("has-error").addClass("has-success");
        },

    });
});