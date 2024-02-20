    document.getElementById('deleteForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener la URL del formulario
        const formAction = this.getAttribute('action');

        // Obtener el método del formulario (POST)
        const formMethod = this.getAttribute('method');

        // Crear una solicitud FETCH para enviar una solicitud DELETE al servidor
        fetch(formAction, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
            return response.json();
        })
        .then(data => {
            // Manejar la respuesta del servidor, si es necesario
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

