const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            window.location.href = 'src/dashboard/dashboard.html';
        } else {
            window.location.href = 'src/login/login.html';
        }