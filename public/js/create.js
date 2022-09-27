const modal = new bootstrap.Modal(document.getElementById('MyModal'));
const boton = document.getElementById('boton');

const createTask = ()=>{
    modal.show();
    document.querySelector('h5').innerText = 'New Task';

    boton.setAttribute('onclick', 'saveTask()')
  }


const saveTask = async()=>{
    const materia = document.getElementById('materia').value;
    const tarea = document.getElementById('tarea').value;
    const entrega = document.getElementById('entrega').value;


    const req = await fetch('/task', {
      method: 'POST',
      body: JSON.stringify({materia, tarea, entrega}),
      headers: {
        'Content-Type':'application/json',
      }
    })
    const res = req;

    (res.ok)?window.location.href = '/task':alert('Error al crear')
  }