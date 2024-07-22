const nameField = document.getElementById('name1');
const form = document.getElementById('shape');
const errorDiv = document.getElementById('error');

form.addEventListener('submit', (e) => {
 
    if (nameField.value.trim() === '' || nameField.value.trim() === null )
        e.preventDefault();
        errorDiv.textContent = 'Forename is required .';
    }
});
