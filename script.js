// 1. Check karo ki pehle se koi data saved hai kya browser mein?
// Agar hai toh wahi uthao, nahi toh khali list ([]) rakho.
let collectionList = JSON.parse(localStorage.getItem('bhandaraData')) || [];
let total = 0;

// Jab page load ho, purana data table mein dikhao
window.onload = function() {
    updateTable();
    updateTotal();
};

function addEntry() {
    const nameInput = document.getElementById('userName');
    const amountInput = document.getElementById('userAmount');
    
    if (nameInput.value === "" || amountInput.value === "") {
        alert("Please enter Name and Amount!");
        return;
    }

    const entry = {
        name: nameInput.value,
        amount: parseInt(amountInput.value)
    };

    collectionList.push(entry);

    // 2. IMPORTANT: List ko browser ki memory (LocalStorage) mein save karo
    // Hum "JSON.stringify" use karte hain kyunki LocalStorage sirf text samajhta hai
    localStorage.setItem('bhandaraData', JSON.stringify(collectionList));

    updateTable();
    updateTotal();

    nameInput.value = "";
    amountInput.value = "";
}

function updateTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""; 

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

// Ek extra function data clear karne ke liye (Reset button ke liye)
function resetData() {
    if(confirm("Saara data delete kar dein?")) {
        localStorage.removeItem('bhandaraData');
        collectionList = [];
        updateTable();
        updateTotal();
    }
}
