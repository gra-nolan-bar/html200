let balance = 0;

// Function to perform user input and run banking app
function performBankAction() {
    while (true) {
        let userInput = prompt(`Enter your action: (Q)uit, (W)ithdraw, (D)eposit, (B)alance`).toUpperCase();
        
        switch (userInput) {
            case 'Q':
                alert('Exiting app. Thank you for banking with us!');
                return;
            case 'W':
                withdrawMoney();
                break;
            case 'D':
                depositMoney();
                break;
            case 'B':
                viewBalance();
                break;
            default:
                alert('Invalid input. Please enter one of: Q, W, D, B');
        }
    }
}
 
// Function to withdraw money
function withdrawMoney() {
    let amount = parseFloat(prompt(`Your balance is $${balance.toFixed(2)}. Enter amount to withdraw:`));
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid amount. Withdrawal cancelled. Please enter a positive number.');
        return;
    }
    if (amount > balance) {
        alert(`Insufficient funds. Withdrawal cancelled. Your current balance is $${balance.toFixed(2)}.`);
        return;
    }
    balance -= amount;
    alert(`Successfully withdrew $${amount}. Your new balance is $${balance.toFixed(2)}.`);
}

// Function to deposit money
function depositMoney() {
    let amount = parseFloat(prompt('Enter amount to deposit:'));
    if (isNaN(amount) || amount <= 0) {
        alert('Invalid amount. Deposit cancelled.');
        return;
    }
    balance += amount;
    alert(`Successfully deposited $${amount}. Your new balance is $${balance.toFixed(2)}.`);
}

// Function to view balance
function viewBalance() {
    alert(`Your current balance is $${balance.toFixed(2)}.`);
}
