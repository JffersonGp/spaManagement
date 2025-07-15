document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        window.location.href = '../dashboard/dashboard.html';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});