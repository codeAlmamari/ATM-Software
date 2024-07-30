

document.addEventListener('DOMContentLoaded', function () {

    // saving the needed infoemation in to variabls
    const form = document.getElementById('transaction-form');  
    const balanceElement = document.getElementById('balance');

    // here we convert the balanceElement to float and if it NAN the put it to 0
    let balance = parseFloat(balanceElement.textContent) || 0;

    // here we add event listener to the submit in the form 
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        const transactionType = document.getElementById('choice').value;

        
        
        let newBalance;

        switch (transactionType) {
            case 'withdraw':
                newBalance = parseFloat(prompt('Enter the amount you want to withdraw:'));
                if (newBalance > balance) {
                    alert('Insufficient funds!');
                    return;
                }
                balance -= newBalance;
                break;
            case 'deposit':
                newBalance = parseFloat(prompt('Enter the amount you want to deposit:'));
                if (isNaN(newBalance) || newBalance <= 0) {
                    alert('Invalid deposit amount!');
                    return;
                }
                balance += newBalance;
                break;
            case 'transfer':
                newBalance = parseFloat(prompt('Enter the amount you want to transfer:'));
                if (isNaN(newBalance) || newBalance <= 0) {
                    alert('Invalid transfer amount!');
                    return;
                }
                balance -= newBalance;
                break;
            default:
                alert('Invalid transaction type!');
                return;
        }

        // her we upadte the value of balance with .00 
        balanceElement.textContent = balance.toFixed(2);
    });
});
