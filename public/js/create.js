const post = async()=>{
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

    const res = await req;

    (res.ok)?window.location.href = '/task':console.log('error')
  }