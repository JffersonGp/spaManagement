Titulo: SpaEventos

Descripcion:
SPA de Gestión de Eventos. Proyecto para gestión de eventos con autenticación, roles, rutas protegidas y operaciones CRUD usando json-server como base de datos simulada.

Objetivo:


Instalación y ejecución del proyecto:

Clona el repositorio:
git clone  

Entra al directorio del proyecto:
- cd spa-eventos
- Instala json-server (si no lo tienes):
   npm install -g json-server 
- Ejecuta el servidor:
    json-server --watch db.json --port 3000
Abre el archivo index.html en tu navegador o usa una extensión de Live Server en tu editor.


Roles y autenticaciónAdministrador:

Usuario Configurado Admin: admin@eventos.com
Contraseña: admin123
Puede crear, editar y eliminar eventos.

Visitante:
Puede registrarse.
Puede visualizar y registrarse a eventos.
Rutas protegidasLas vistas como /dashboard, /createEvent y /editEvent requieren autenticación.
Si un visitante intenta acceder sin sesión, será redirigido a not-found.html.
Si un usuario autenticado accede a /login o /register, será redirigido al dashboard.


Tecnologías Utilizadas:
- HTML
- CSS
- JavaScript

Nombre: Jefferson Giraldo Posada
Clan: Ritch

______________________________________________________________________________________________________________________________________________________________________

Title: SpaEvents

Description:
Event Management SPA. Project for event management with authentication, roles, protected routes, and CRUD operations using json-server as a mock database.

Objective:

Install and run the project:

Clone the repository:
git clone

Go to the project directory:

- cd spa-events
- Install json-server (if you don't have it):
npm install -g json-server
- Run the server:
json-server --watch db.json --port 3000

Open the index.html file in your browser or use a Live Server extension in your editor.

Roles and Authentication: Administrator:

Configured User: Admin@eventos.com
Password: admin123
Can create, edit, and delete events.

Visitor:
Can register.
Can view and register for events.
Protected Routes: Views such as /dashboard, /createEvent, and /editEvent require authentication.
If a visitor attempts to access the site without being logged in, they will be redirected to not-found.html.
If an authenticated user accesses /login or /register, they will be redirected to the dashboard.

Technologies Used:
- HTML
- CSS
- JavaScript

Name: Jefferson Giraldo Posada
Clan: Ritch