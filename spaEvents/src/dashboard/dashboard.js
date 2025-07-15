const eventsContainer = document.getElementById("event__container")
const user = JSON.parse(localStorage.getItem("user"));

async function viewEvents() {
    const res = await fetch("http://localhost:3000/events");
    const events = await res.json();

    eventsContainer.innerHTML = events.map(event => 
        `<div class="event">       
        <h3>${event.nameEvent}</h3>       
        <p>${event.description}</p>       
        <p><strong>Fecha:</strong> ${event.date}</p>       
        ${user?.role === "admin" ? `
        <button onclick= "editEvent(${[event.id]})">Editar</button>
        <button onclick="deleteEvent(${[event.id]})">Eliminar</button>`: ""}     
        </div>`).join("");
}

function editEvent(id) {
    window.location.href = `../editEvent/editEvent.html?id=${id}`;
}

async function deleteEvento(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este evento?")) {
        await fetch(`http://localhost:3000/events/${id}`, {
            method: "DELETE"
        });
        viewEvents();
    }
}

viewEvents();