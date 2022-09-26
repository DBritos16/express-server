const deleteOne = async(id)=>{

    const req = await fetch(`/task/${id}`, {
        method: 'DELETE'
    })

    const res = req;

    (res.ok)?window.location.href = '/task':console.log('Error al eliminar')

}