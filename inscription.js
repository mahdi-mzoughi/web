function passValidation() {
    // Récupérer les valeurs des champs de mot de passe
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;

    // Vérifier si les mots de passe sont identiques
    if (password1 !== password2) {
        // Afficher un message d'erreur
        alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
    } else {
        // Les mots de passe sont identiques - autre traitement si nécessaire
        alert("Inscription réussie !");
    }
}
