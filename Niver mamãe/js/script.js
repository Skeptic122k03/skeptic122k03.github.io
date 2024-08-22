function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'gatinhofofo'; // Substitua pela senha desejada

    if (password === correctPassword) {
        window.location.href = 'secret.html';
    } else {
        alert('Senha incorreta! Tente novamente.');
    }
}
