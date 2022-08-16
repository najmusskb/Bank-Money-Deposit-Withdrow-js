// button deposit 
// step-01
document.getElementById('deposit-button').addEventListener('click', function () {
    // console.log('paicy re')


    // step-02

    const dipositField = document.getElementById('deposit-input');

    const newdepositAmount = dipositField.value;
    // console.log(depositAmount);



    // step-03 for non input --element other then input ,text-area--use  innertext ....


    const DepositTotalElement = document.getElementById('deposit-total');
    const previousdepositTotal = DepositTotalElement.innerText;
    const currentdepositTotal = parseInt(previousdepositTotal) + parseInt(newdepositAmount);
    // console.log(depositTotal);
    DepositTotalElement.innerText = currentdepositTotal;



    //04- get balance current total 

    const balanceTotalElement = document.getElementById('balance-total');


    const previousTotal = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousTotal);


    // step -05;


    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newdepositAmount);

    balanceTotalElement.innerText = currentBalanceTotal;























    // step 07-clear the deopdit
    dipositField.value = '';

})