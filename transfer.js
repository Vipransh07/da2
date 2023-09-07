const transferForm = document.getElementById('transfer-form');
const recipientAccountInput = document.getElementById('recipient-account');
const transferAmountInput = document.getElementById('transfer-amount');
const transactionTable = document.getElementById('transaction-table');

// Function to handle transfer submission
function handleTransferSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the recipient account and transfer amount entered by the user
    const recipientAccount = recipientAccountInput.value;
    const transferAmount = parseFloat(transferAmountInput.value);

    // Check if the input is valid
    if (recipientAccount && !isNaN(transferAmount) && transferAmount > 0) {
        // Perform your transfer logic here

        // For this example, we'll simulate a successful transfer
        const successMessage = `Successfully transferred $${transferAmount.toFixed(2)} to Account ${recipientAccount}.`;

        // Add a row to the transaction table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${new Date().toLocaleDateString()}</td>
            <td>${recipientAccount}</td>
            <td>$${transferAmount.toFixed(2)}</td>
        `;
        transactionTable.appendChild(newRow);

        // You can replace the following alert with your actual logic
        alert(successMessage);

        // Optionally, you can redirect the user to another page after the transfer
        // window.location.href = 'account.html'; // Redirect to the account page
    } else {
        alert('Invalid recipient account or transfer amount. Please check your inputs.');
    }
}

// Add a submit event listener to the transfer form
transferForm.addEventListener('submit', handleTransferSubmit);