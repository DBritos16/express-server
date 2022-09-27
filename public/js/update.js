
const editTask = async (id)=>{
    modal.show();
    document.querySelector('h5').innerText = 'Edit Task';

    const req = await fetch(`/edit/${id}`);

    const res = await req.json();

    document.getElementById('materia').value = res[0].materia;
    document.getElementById('tarea').value = res[0].tarea;
    document.getElementById('entrega').value = res[0].entrega;

    boton.setAttribute('onclick', `updateTask('${id}')`)
}

const updateTask = async (id)=>{

    const materia = document.getElementById('materia').value
    const tarea = document.getElementById('tarea').value
    const entrega = document.getElementById('entrega').value

    const req = await fetch(`/task/${id}`, {
        method: 'PUT',
        body: JSON.stringify({materia, tarea, entrega}),
        headers: {
            'Content-Type':'application/json',
          }
    })

    const res = req;
    
    (res.ok)?window.location.href = '/task':alert('Error al actualizar')

}
