function submitForm() {
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.getElementById('gender').value;
    const food = Array.from(document.getElementById('food').selectedOptions).map(option => option.value);
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
  
    const tableBody = document.querySelector('#dataTable tbody');
    const newRow = tableBody.insertRow();
    const cells = [firstName, lastName, address, pincode, gender, food.join(', '), state, country];
  
    cells.forEach((cellValue, index) => {
      const cell = newRow.insertCell(index);
      cell.textContent = cellValue;
    });
  
    
    document.getElementById('myForm').reset();
  }
  