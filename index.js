$("#botonMensaje").on("click", async () => {
  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });

  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
});
