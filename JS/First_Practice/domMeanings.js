// DOM = NODES

//- Seleccion de Elementos:

document.getElementById("idName") // Specific ID
document.getElementByTagName("") // Tag as the html, example: 'p' 'h1', etc
document.querySelector(".name") // Depend on the Selector
document.querySelectorAll() // As the Selector but choose everything

//-----------------------------------------------------------------------------------------------//

//- Metodos - Obtener, Definir, Eliminar atributos

document.setAttribute("atributo","value") // Cambia el atributo por el valor ingresado
document.getAttribute("atributo") // Obtiene el value
document.removeAttribute("atributo") // Elimina el atributo

//-----------------------------------------------------------------------------------------------//

//- Atributos globales

/*
- contentEditable = Si el elemento puede ser o no editable por el usuario (bool)
- dir = Indica direccionalidad del texto (rtl | ltr)
- hidden = Indica si el elemento es o no relevante
- style = Contiene declaraciones estilo CSS para aplicarlas al elemento
- tabindex = Indica si el elemento puede tener un focus de input // tabindex="#" Con el tab se hace el focus a lo seleccionado
- title = Contiene un texto con informacion relacionada al elemento

*/

// Examples:

const titulo = document.querySelector(".titulo");

titulo.setAttribute("contentEditable", "true") // Boleano, determina si se puede cambiar o no

titulo.setAttribute("dir","rtl"); // rtl or ltr

//-----------------------------------------------------------------------------------------------//

//- Atributos de Inputs = Como ingresar o cambiarlos con JS:

/*
- className = Obtiene el nombre de la clase de la propiedad seleccionada
- value = Obtiene el valor del Input
- type = Cambia el type del Input
- accept = Regula los lo que se ingrese dentro del Input
- form = Permite a un boton fuera del Form convencional realizar la funcion de guardar el valor
- minLength = Caracteres minimos para ingresar en el Input
- placeholder = El hint del Input
- required = Obliga al usuario a ingresar algo en el Input
*/

const input = document.querySelector(".inputTranqui");

input.required = "true"
input.type = "range"
