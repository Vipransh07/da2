const depositForm = document.getElementById('deposit-form');
const depositAmountInput = document.getElementById('deposit-amount');
const transactionTable = document.getElementById('transaction-table');

// Function to handle deposit submission
function handleDepositSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the deposit amount entered by the user
    const depositAmount = parseFloat(depositAmountInput.value);

    // Check if the input is a valid number greater than 0
    if (!isNaN(depositAmount) && depositAmount > 0) {
        // Perform your deposit logic here (e.g., update the account balance)

        // For this example, we'll simulate updating the balance and adding a transaction row
        const successMessage = `Successfully deposited $${depositAmount.toFixed(2)}.`;

        // Add a row to the transaction table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${new Date().toLocaleDateString()}</td>
            <td>Deposit</td>
            <td>$${depositAmount.toFixed(2)}</td>
        `;
        transactionTable.appendChild(newRow);

        // You can replace the following alert with your actual logic
        alert(successMessage);

        // Optionally, you can redirect the user to another page after the deposit
        // window.location.href = 'account.html'; // Redirect to the account page
    } else {
        alert('Invalid deposit amount. Please enter a valid number greater than 0.');
    }
}

// Add a submit event listener to the deposit form
depositForm.addEventListener('submit', handleDepositSubmit); 