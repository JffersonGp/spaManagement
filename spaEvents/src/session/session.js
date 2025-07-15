
const user = JSON.parse(localStorage.getItem('user'));


if ((window.location.pathname.includes('login') || window.location.pathname.includes('register')) && user) {
    window.location.href = '../dashboard/dashboard.html';
}


const rutasProtegidas = [
    '/dashboard/dashboard.html',
    '/createEvent/createEvent.html',
    '/editEvent/editEvent.html'
];

if (!user && rutasProtegidas.some(ruta => window.location.pathname.includes(ruta))) {
    window.location.href = '../notFound/notFound.html';
}