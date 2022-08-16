// step-01 add even handler with submit button  
document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('okkkkkkkkkk');



    // step - 02 get the email address inside the email  input field
    // allways remember to use . value to get text form an input field 
    const EmailField = document.getElementById('user-email');
    const email = EmailField.value;
    console.log(email);

    // step 03 get password by id name 
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);





    // danger : do not varify email password on the client side 
    // step-04 varify email and password.......................


    if (email === 'najmussakib173@gmail.com' && password === 'sHakib123') {
        // console.log('valid user')

        // connection with bank.html page 
        window.location.href = 'bank.html';
    }
    else {

        alert('Email or Password Incorrect');
    }

})







