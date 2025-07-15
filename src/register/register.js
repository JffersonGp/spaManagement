document.getElementById('registerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const firtsName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    

    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    const exists = users.some(user => user.email === email);

    if (exists) {
        alert('Este correo ya está registrado');
        return;
    }

    const newUser = { firtsName, email, password};

    await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
    });

    alert('Usuario registrado con éxito');
    window.location.href = '../login/login.html';
});