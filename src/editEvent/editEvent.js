const params = new URLSearchParams(window.location.search);
const eventId = params.get('id');

const form = document.getElementById('formEditEvent');

async function chargeEvent() {
    const res = await fetch(`http://localhost:3000/events/${eventId}`);
    const event = await res.json();

    form.name.value = event.name;
    form.description.value = event.description;
    form.ability.value = event.ability;
    form.date.value = event.date.value;
}

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameEventUpdate = form.name.value;
    const descriptionUpdate = form.description.value
    const abilityUpdate = parseInt(form.ability.value);
    const dateUpdate = form.date.value;

    const eventUpdate = {
        nameEventUpdate,
        descriptionUpdate,
        abilityUpdate,
        dateUpdate
    };

    await fetch(`http://localhost:3000/events/${eventId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventUpdate)
    });

    alert('Evento actualizado exitosamente');
    window.location.href = '../dashboard/dashboard.html';
});

chargeEvent();