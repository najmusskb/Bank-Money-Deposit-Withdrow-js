// step-01 add even handler with submit button  
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('okkkkkkkkkk');



    // step - 02 get the email address inside the email  input field
    // allways remember to use . value to get text form an input field 
    const EmailField = document.getElementById('user-email');
    const email = EmailField.value;
    console.log(email);



})

