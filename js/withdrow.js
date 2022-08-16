document.getElementById('withdraw-button').addEventListener('click', function () {


    // get button and withdrowinput  
    const inputwithdraw = document.getElementById('withdraw-input');
    const inputwithdrawGetElement = inputwithdraw.value;
    console.log(inputwithdrawGetElement);



    //  get withdrow amound sumation 
    const withdrowTotal = document.getElementById('withdraw-Total');
    const PreviousTotal = withdrowTotal.innerText;
    const currentTotalIs = parseFloat(PreviousTotal) + parseFloat(inputwithdrawGetElement);
    withdrowTotal.innerText = currentTotalIs;
    inputwithdraw.value = '';



    //  subtraction of balanceTotal
    const balanceTotal = document.getElementById('balance-total');
    const previousAmount = balanceTotal.innerText;
    const withdrowsubbalance = parseFloat(previousAmount) - parseFloat(currentTotalIs);
    balanceTotal.innerText = withdrowsubbalance;












})