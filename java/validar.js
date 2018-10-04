

function validar()
{
var nombres, telefono, correo, constraseña, repetir;

nombres = document.getElementById("names").value;

telefono = document.getElementById("phone").value;

correo = document.getElementById("email").value;

constraseña = document.getElementById("clave").value;

repetir = document.getElementById("rclave").value;

if (nombres === "" || telefono === "" || correo === "" || constraseña === "" || repetir === "")
{alert ( "todos los campos son obligatorios");
}
}
