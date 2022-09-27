const modal = new bootstrap.Modal(document.getElementById('myModal'));


const openUpdate = async (id)=>{
    modal.show();

    const req = await fetch(`/edit/${id}`);

    const res = await req.json();

    document.getElementById('materia1').value = res[0].materia;
    document.getElementById('tarea1').value = res[0].tarea;
    document.getElementById('entrega1').value = res[0].entrega;

    document.getElementById('save').setAttribute('onclick', `update('${id}')`)
    
}

const update = async (id)=>{

    const materia = document.getElementById('materia1').value
    const tarea = document.getElementById('tarea1').value
    const entrega = document.getElementById('entrega1').value

    const req = await fetch(`/task/${id}`, {
        method: 'PUT',
        body: JSON.stringify({materia, tarea, entrega}),
        headers: {
            'Content-Type':'application/json',
          }
    })

    const res = req;
    
    (res.ok)?window.location.href = '/task':console.log('Error')

}
