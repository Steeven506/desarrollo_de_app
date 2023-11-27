console.log("prueba conexion");
function pedido() {
    Swal.fire({
        title: "¿Desea realizar algun cambio?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `No guardar`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Finalizado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Los datos no han sido cambiados", "", "info");
        }
    });  
}
