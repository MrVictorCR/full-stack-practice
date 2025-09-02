// - IdexedDB - //

/*
    IndexedDB is a NoneSQL DB, Async - Orientada a Objetos - CRUD
*/

"use strict";

const IDBRequest = indexedDB.open("VicBase", 1); // Call request

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres", {
        autoIncrement: true
    })
})

IDBRequest.addEventListener("success",()=>{
    leerObjeto();
})

IDBRequest.addEventListener("error",()=>{
    console.log("Ocurrio un error");
})

document.getElementById("add").addEventListener("click",()=>{
    let nombre = document.getElementById("nombre").value;
    if (nombre.lenght > 0){
        if (document.querySelector(".posible") != undefined){
            if (confirm("Existen elementos sin guardar: ¿Deseas guardarlos?")){
                addObjeto({nombre});
                leerObjeto();
            }
        } else{
            addObjeto({nombre});
            leerObjeto();
        }
    }
})

/* 
As you may see in DB it was created but doesn't have any space to save any info so, we need to create it =
    (Object Store) 
*/

const addObjeto = objeto => {
    const IDBData = getIDBData("readwrite", "Objeto agregado");
    IDBData.add(objeto)
    
} // Cuando se llama a la funcion se agrega el addObjeto({nombre: "name"}), ya que envia objetos

const leerObjeto = ()=>{
    const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor(); // A cursor is created who's going to read the DB
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if (cursor.result){
            let elemento = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(elemento)
            cursor.result.continue()
        } else console.log("todos los datos fueron leidos") // Cursor always have a NULL at the end, so the Else work
    })
}

const modificarObjeto = (key, objeto) => {
    const IDBData = getIDBData("readwrite", "Objeto modificado");
    IDBData.put(objeto,key);
}

const eliminarObjeto = key => {
    const IDBData = getIDBData("readwrite", "Objeto eliminado");
    IDBData.delete(key);
}

const getIDBData = (mode,msg)=>{
    const db = IDBRequest.result;
    const IDBtransaction = db.transaction("nombres",mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBTransaction.addEventListener("complete", ()=>{
        console.log(msg)
    })
    return [objectStore];
}

const nombresHTML = (id,name)=>{
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete"); 

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck", "false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup", ()=>{
       if (saveButton.className == "posible"){
            modificarObjeto(id,{nombre: h2.textContent});
            saveButton.classList.replace("posible", "imposible");
       }
    })

    deleteButton.addEventListener("click",()=>{
        eliminarObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container
}