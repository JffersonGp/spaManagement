document.getElementById('creationEvent').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameEvent = e.target.nameEvent.value;
    const description = e.target.description.value;
    const ability = parseInt(e.target.ability.value);
    const date = e.target.date.value;

    const newEvent = {
        nameEvent,
        description,
        ability,
        date
    };

    await fetch('http://localhost:3000/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    });

    alert('Evento creado exitosamente');
    window.location.href = '../dashboard/dashboard.html';
    
});

