const deleteConfirmation = async (id)=>{
    modal.show()

    document.querySelector('h5').innerText = '¡Alerta!'
    document.getElementById('body').innerHTML = 'Estas seguro que desea eliminar esta tarea?'
    boton.className = 'btn btn-danger';
    boton.innerText = 'Eliminar';
    boton.setAttribute('onclick', `deleteTask('${id}')`)
    document.getElementById('close').setAttribute('onclick', 'cancel()')

}

const deleteTask = async(id)=>{

    const req = await fetch(`/task/${id}`, {
        method: 'DELETE'
    })

    const res = req;

    (res.ok)?window.location.href = '/task':alert('Error al eliminar')

}

const cancel = ()=>{
    document.getElementById('bod').innerHTML = '';
    document.getElementById('bod').innerHTML = `<form action="/task" method="post">
                  <div class="mb-3">
                      <label class="form-label">Materia</label>
                      <input type="text" class="form-control" id="materia">
                  </div>
                  <div class="mb-3">
                      <label class="form-label">Tarea</label>
                      <input type="text" class="form-control" id="tarea">
                  </div>
                  <div class="mb-3">
                      <label class="form-label">Entrega</label>
                      <input type="text" class="form-control" id="entrega">
                  </div>

                  </div>
                  <div class="modal-footer" id="footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-success" id="boton">Save</button>
                  </div>
              </form>`

}