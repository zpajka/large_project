$(document).ready(function () {
	$('.acceptButton').click(function () {
		$(this).val("Accepted");
	    });

        $('.sendButton').attr('disabled',true);
    $('#dareContent').keyup(function(){
        if($(this).val().length !=0){
            $('.sendButton').attr('disabled', false);
        }
        else
        $('.sendButton').attr('disabled',true);
    })
    });
