const getInfo = async ()=> {
    let aprobados = document.querySelector(".num-aprobados");
    let reprobados = document.querySelector(".num-reprobados");

    try{
        resultado = await axios("json.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        reprobados.innerHTML = resultado.data.reprobados;
    } catch(error) {
        aprobados.innerHTML = "Error al cargar los datos";
        reprobados.innerHTML = "Error al cargar los datos";
    }
}

document.getElementById("getInfo").addEventListener("click", getInfo);
