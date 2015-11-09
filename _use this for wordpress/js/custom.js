// http://BloodClotFilterAlert.com/submission/

(function($){
	jQuery(document).ready(function($) {

	//---------------------- SURVEY FORM --------------------------

    // Custom validator functions
    $.validator.methods.ensure_surgery_yes = function(value, element, param) {
       return $('input[name=surgery]:checked', '#survey-form').val() == "yes"
    };

    $.validator.methods.ensure_year_yes = function(value, element, param) {
       return $('input[name=year]:checked', '#survey-form').val() == "yes"
    };    

    // Form object
    var frm_survey = $("#survey-form");

    // Setup validation
    frm_survey.validate({

        rules: {
            surgery: { required: true, ensure_surgery_yes: "yes" },
            year: { required: true, ensure_year_yes: "yes" }
        },

        messages: {
            surgery: { 
              required: "Please answer the question first.",
              ensure_surgery_yes: "Based on your answer, you do not qualify for the IVC blood clot filter lawsuit.",
            },
            year: { 
              required: "Please answer the question first.",
              ensure_year_yes: "Based on your answer, you do not qualify for the IVC blood clot filter lawsuit.",
            }
        },

        errorPlacement: function(error, element) 
        {
            if (element.is(":radio")) 
                error.insertAfter( element.parent() );
            else 
                error.insertAfter( element );
        }
    });

    // Activate the wizard
    frm_survey.children("div").steps({

        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",

        onStepChanging: function (event, currentIndex, newIndex)
        {
            // console.log('onStepChanging - currentIndex: ' + currentIndex);
            frm_survey.validate().settings.ignore = ":disabled,:hidden";
            return frm_survey.valid();
        },

        onFinishing: function (event, currentIndex)
        {
            frm_survey.validate().settings.ignore = ":disabled";
            return frm_survey.valid();
        },

        onFinished: function (event, currentIndex)
        {
            $("#survey-form").hide();
            $("#contact-form").show();
            // $("#contact-form").removeClass("invisible");
        }
    });
	//---------------------- END SURVEY FORM -----------------------

	//---------------------- CONTACT FORM --------------------------

    var frm_contact = $("#contact-form");

    // Setup validation
    frm_contact.validate({

        rules: {
            fname: { required: true },
            lname: { required: true },
            email: { required: true },
            phone: { required: true, phoneUS: true },
            checkbox1: { required: true }
        },

        errorPlacement: function(error, element) 
        {
			error.insertAfter( element );
        }
    });


	//---------------------- END CONTACT FORM ----------------------

	});
})(jQuery);