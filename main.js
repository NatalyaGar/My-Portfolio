console.log("It works");
$(document).ready (function(){
 $(' .submit').click(function (event){
   console.log('Clicked button')

   var firstName = $(' .firstName').val()
   var email = $(' #email').val()
   var message = $(' #message').val()
   var statusElm = $('#status')
   statusElm.empty()

   if(email.length > 5 && email.includes('@') && email.includes('.')){
       statusElm.append('<div>Email is valid</div>')
   }else{
    event.preventDefault()
    statusElm.append('<div>Email is not valid</div>')
   }

   if(message.length >= 2) {
    statusElm.append('<div>Message is valid</div>')
    }else{
    event.preventDefault()
    statusElm.append('<div>Message is not valid</div>')
   }

   
 })
})