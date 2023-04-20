const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")
// expresciones necesarias
const expresiones = {
usuario: /^[a-zA-Z\_\-]{4,16}$/, // ACEPTA MINUSCULAS Y MAYUSCULAS, NÚMEROS DEL 0 HASTA EL 9, GUIONES BAJOS, Y  UNA CANTIDAD MINIMA Y MAXIMA DE CARACTERES

nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // ACEPTA LAS LETRAS
password: /^.{4,8}$/, // LA CONTRASEÑA COMO MINIMO DEBE TENER 8 CARACTERES Y MAXIMO 12
correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
telefono:/^[a-zA-Z\_\-]{4,16}$/ // ACEPTARA MINIMO 7 Y MAXIMO 10 NUMEROS
}
// CAMPOS
const campos = {
usuario: false,
nombre: false,
password: false,
correo: false,
telefono: false
}
const validarFormulario = (e) => {
switch(e.target.name) {
case "usuario":
validarCampo(expresiones.usuario, e.target, "usuario");
break;
case "nombre":
validarCampo(expresiones.nombre, e.target, "nombre");
break;
case "password":
validarCampo(expresiones.password, e.target, "password");
validarPassword2();
break;
case "password2":
validarPassword2();
break;
case "correo":
validarCampo(expresiones.correo, e.target, "correo");
break;
case "telefono":
validarCampo(expresiones.telefono, e.target, "telefono");
break;
}
}
// VALIDAR LOS INPUTS
const validarCampo = (expresion, input, campo) => {
if (expresion.test(input.value)){
document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
document.querySelector(`#grupo_${campo} .formularioinput-error`).classList.remove("formulario_input-erroractivo");
campos[campo] = true;
console.log("Funciona");
} else {
document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-incorrecto");
document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-correcto");
document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
document.querySelector(`#grupo_${campo} .formularioinput-error`).classList.add("formulario_input-erroractivo");
campos[campo] = false;
console.log("Funciona");
}
}
// VALIDACION DE LAS CONTRASEÑAS
const validarPassword2 = () => {
let inputPassword1 = document.getElementById("password");
let inptPassword2 = document.getElementById("password2");
if (inputPassword1.value !== inptPassword2.value) {
document.getElementById(`grupo_password2`).classList.add("formulario_grupo-incorrecto");
document.getElementById(`grupo_password2`).classList.remove("formulario_grupo-correcto");
document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
document.querySelector(`#grupo_password2 .formularioinput-error`).classList.add("formulario_input-erroractivo");
campos[password] = false;
console.log("Funciona");
} else {
document.getElementById(`grupo_password2`).classList.remove("formulario_grupo-incorrecto");
document.getElementById(`grupo_password2`).classList.add("formulario_grupo-correcto");
document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
document.querySelector(`#grupo_password2 .formularioinput-error`).classList.remove("formulario_input-erroractivo");
campos[password] = true;
console.log("Funciona");
}
}
$inputs.forEach((input) => {
input.addEventListener("keyup", validarFormulario);
input.addEventListener("blur", validarFormulario);
});
// VALIDACION DEL FORMULARIO
$formulario.addEventListener("submit", (e) => {
e.preventDefault();
const $terminos = document.getElementById("terminos");
if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && $terminos.checked) {
// formulario.reset();
document.getElementById("formulario_mensaje-exito").classList.add("formulario_mensaje-exito-activo");
setTimeout(() => {
document.getElementById("formulario_mensaje-exito").classList.remove("formulario_mensaje-exito-activo");
document.getElementById("formulario__grupo-terminos").style.display = "none";
}, 3000);
document.querySelectorAll(".formulario__grupo--correcto").forEach ((icono) => {
icono.classList.remove("formulario__grupo--correcto");
});
setTimeout(() => {
location.reload();
}, 5000);
} else {
document.getElementById("formulario_mensaje").classList.add("formulario_mensaje-activo");
}
});