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

input.required = "true";
input.type = "range";

//-----------------------------------------------------------------------------------------------//

//- Style con JS: Propiedades con camelCase
const tituloA = document.querySelector(".titulo");

tituloA.style.color = "blue";
tituloA.style.padding = "30px";

//-----------------------------------------------------------------------------------------------//

//- Metodos classList

/* 
- add() = Le añade una clase al elemento
- item() = Devuelve el valor de la posicion de la clase
- contains() = Devuelve true or false si la clase existe o se encuentra en el elemento
- remove() = Remueve una clase
- toggle() = Si tiene la clase la remueve (false), si no la agrega (true)
- replace() = Remplaza una clase por otra ("x", "y") remplaza la X con Y en caso de que X exista
*/

tituloA.classList.add("grande");

//-----------------------------------------------------------------------------------------------//

//- Obtencion y Modificacion de Elementos: 

/* 
- textContent() = Devuelve el contenido de algo SIN HTML
- innerHTML() = Devuelve el contenido de algo CON HTML
- outerHTML() = Devuelve TODA la etiqueta
*/

//-----------------------------------------------------------------------------------------------//

//- Creacion de Elementos - Funciones Child

/* 
- createElement("HTML") = La parte HTML tiene que ir en mayuscula
- createTextNode() = Crea un nodo de tipo texto
- createDocumentFragment() = Agrega todo un fragmento de golpe a un elemento Padre, podiendo almacenar varios elementos en uno solo
-------------------------------------------------------------------
- appendChild() = Metodo de hijos para agregar un elemento al padre
- first/lastElementChild; = Encontrar el primer o ultimo nodo del padre
- childNodes; = Devuelve un NodeList de los elementos del padre
- children; = Devuelve la coleccion HTML
*/

const contenedor = document.querySelector(".contenedor");
const item = document.createElement("LI");

const textDelItem = document.createTextNode("Item de la LI")

item.appendChild(textDelItem); // Agrega el elemento como un valor de la lI
contenedor.appendChild(item); // Agrega lo guardado en item dentro del contenedor

// Hay otra ez way de hacer eso:

item.innerHTML = "Item de la LI";
contenedor.appendChild(item);

/* Ahora, que pasa si quiero agregar varios elementos a un contenedor? 
        Para hacer esto es necesario tomar en cuenta el gasto de recursos, por ende se creo la siguiente solución
*/

const fragmento = document.createDocumentFragment();

for (i=0;i<20;i++){
    const item = document.createElement("LI");
    item.innerHTML = "Item de la LI";
    fragmento.appendChild(item);
}

contenedor.appendChild(fragmento); // Esto provee todo lo guardado dentro del contenedor

//-----------------------------------------------------------------------------------------------//

//- New Child Skills:

// Child métodos:

/* 
- replaceChild() = remplaza un hijo por otro, puede ser de diferente tipo?
- removeChild() = Remueve el hijo seleccionado
- hasChildNodes() = Devuelve un boleano, si tiene hijos o no
- parentNode/Element = Muestran el Nodo o el Elemento padre
*/

const parrafo = document.createElement("P");
const h1_new = document.createElement("H2");
h1_new.innerHTML = "Titulo";

const h1_old = document.queryS
contenedor.replaceChild(h1_new, h1_old); // Remplaza
elector(".h1")

contenedor.replaceChild(h1_new, h1_old); // Remplaza

contenedor.removeChild(h1_old); // Remueve

let answer = contenedor.hasChildNodes(); // Verifica si tiene Hijos

if (answer){
    document.write("Tiene Hijos")
} else {
    document.write("No tiene Hijos")
}


//- Siblings propiedades:

/*
- .nextSibling =
- .previous/nextElementSibling = Muestra el hermanio previo/posterior
- closest() = Muestra el Elemento ascendente más cercano (Busca el contenedor)
*/