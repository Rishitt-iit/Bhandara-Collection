// Data store karne ke liye list (Array)
let collectionList = [];
let total = 0;

function addEntry() {
    const nameInput = document.getElementById('userName');
    const amountInput = document.getElementById('userAmount');
    
    // Simple checks
    if (nameInput.value === "" || amountInput.value === "") {
        alert("Please enter both Name and Amount!");
        return;
    }

    // Data ko object mein daalna
    const entry = {
        name: nameInput.value,
        amount: parseInt(amountInput.value)
    };

    // List mein add karna
    collectionList.push(entry);

    // Update the UI
    updateTable();
    updateTotal();

    // Clear inputs
    nameInput.value = "";
    amountInput.value = "";
}

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""; // Purana data clear karo

    collectionList.forEach((item, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.amount}</td>
            </tr>
        `;
    });
}

function updateTotal() {
    total = collectionList.reduce((sum, item) => sum + item.amount, 0);
    document.getElementById('totalDisplay').innerText = total;
}
