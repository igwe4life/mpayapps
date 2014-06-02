$(document).on("pageshow", "#signup", function() {


	$.validator.addMethod("passmatch", function(value) {
			return value == $("#password").val();
	}, 'Confirmation password must match.');

	$("#signup").validate({

		errorPlacement: function(error, element) {
			if (element.attr("name") === "accType") {
				error.insertAfter($("#accType").parent());
			} else {
				error.insertAfter(element);
			}
		}

	});

});