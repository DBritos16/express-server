console.log("hola");



const update = async(id)=>{
    const form = new FormData(document.querySelector('form'));

    const req = await fetch(`/task/${id}`, {
        method: 'PUT',
        body: form
    })

    const json = await req.json();

    (json == 'ok')?console.log('actualizado'):console.log('No se pudo')

}