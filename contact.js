function validateForm() {
    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var company = document.getElementById('company').value;

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return;
    }

    if (name.trim() === '' || company.trim() === '') {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    // If all validations pass, you can submit the form or perform additional actions.
    alert('Form submitted successfully!');
    document.getElementById('contactForm').submit();
}
