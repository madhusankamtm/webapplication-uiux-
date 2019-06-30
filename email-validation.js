$(document).ready(function(){
    $('#send_message').click(function(e){
       // e.preventDefault();
            
        
        var error = false;
        var ccr_name = $('#name').val();
        var ccr_email = $('#email').val();
        var ccr_subject = $('#subject').val();
        var ccr_message = $('#your_message').val();

        //NAME
        if(ccr_name.length == 0){
            var error = true;
            $('#name_error').fadeIn(500);
        }else{
            $('#name_error').fadeOut(500);
        }

        //EMAIL
        if(ccr_email.length == 0 || ccr_email.indexOf('@') == '-1'){
            var error = true;
            $('#email_error').fadeIn(500);
        }else{
            $('#email_error').fadeOut(500);
        }
        //SUBJECT
        if(ccr_subject.length == 0){
            var error = true;
            $('#subject_error').fadeIn(500);
        }else{
            $('#subject_error').fadeOut(500);
        }
        //MESSAGE
        if(ccr_message.length == 0){
            var error = true;
            $('#message_error').fadeIn(500);
        }else{
            $('#message_error').fadeOut(500);
        }



        if(error == false){
          
             $('#send_message').attr({'disabled' : 'true', 'value' : 'Sending...' });
             
         
             $.post("email.php", $("#contact-form").serialize(),function(result){
                
                 if(result == 'sent'){
                     
                      $('#name').remove();
                      $('#email').remove();
                      $('#subject').remove();
                      $('#your_message').remove();
                      $('#submit').remove();
                     
                     $('#mail_success').fadeIn(500);
                 }else{
                     
                     $('#mail_fail').fadeIn(500);
                    
                     $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                 }
             });
         }
    });
});