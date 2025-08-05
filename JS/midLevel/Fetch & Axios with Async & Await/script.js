const getName = async () => {

    let respuesta = await axios("json.txt");
    let div = document.createElement("div");
    dispatchEvent.classList.add("nombre");
    div.innerHTML = respuesta.data.nombre;
    document.body.appendChild(div);
}

const getAge = async () => {

    let respuesta = await axios("json.txt");
    let div = document.createElement("div");
    dispatchEvent.classList.add("edad");
    div.innerHTML = respuesta.data.edad;
    document.body.appendChild(div);
}

document.getElementById("getName").addEventListener("click", getName);
document.getElementById("getAge").addEventListener("click", getAge);