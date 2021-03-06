// handle deposit item event
document.getElementById('deposit-button').addEventListener('click', function () {
    // get amount deposit
    const depositInput = document.getElementById('deposit-input')
        ;
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = '';
});
// handle withdrow handler
document.getElementById('widthrow-button').addEventListener('click', function () {
    const widthrowInput = document.getElementById('widthrow-input');
    const widthrowAmountText = widthrowInput.value;
    const newWidthrowAmount = parseFloat(widthrowAmountText);
    console.log(newWidthrowAmount);
    // set widthrow total
    const widthrowTotal = document.getElementById('widthrow-total');
    const previousWidthrowText = widthrowTotal.innerText;
    const previousWidthrowTotal = parseFloat(previousWidthrowText);
    const newWidthrowTotal = previousWidthrowTotal + newWidthrowAmount;
    widthrowTotal.innerText = newWidthrowTotal;

    // update-balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWidthrowAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear widhrow total
    widthrowInput.value = '';
});
