/* New Cap, this is about classes with an Example I'll know how it works

Normalmente toda clase tiene un constructor, donde los parametros se inicializan dentro de la clase

Herencia = 
En caso de que una clase extienda o tome herencia de otra esta también podrá usar sus valores con la funcion super(xparametros de la clase madre)
Además podrá utilizar los métodos de la clase madre
*/


class Celulares {
    constructor(color,peso,tamaño,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular Prendido");
            this.encendido = true;
        } else {
            alert("Celular Apagado");
            this.encendido = false;
        }
    }

    reiniciar(){
        if (this.encendido == true){
            alert("Reiniciando Celular")
        } else {
            alert("El Celular Está Apagado")
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDePantalla}`)
    }

    grabarVidep(){
        alert(`grabando video en: ${this.resolucionDePantalla}`)
    }

    mobileInfo(){
        return `
        Color: <b>${this.color}</b></br>
        Peso: <b>${this.peso}</b></br>
        Tamaño: <b>${this.tamaño}</b></br>
        Resolución de Video: <b>${this.resolucionDePantalla}</b></br>
        Memoria Ram: <b>${this.color.memoriaRam}</b></br>
        `;
    }
}

//-----------------------------------------------------------------------------------------------------------------------//

class CelularAltaGama extends Celulares { // Extends mean herencia
    constructor(color,peso,tamaño,ram,rdce){
        super(color,peso,tamaño,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en cámara lenta");
    }
    reconocimientoFacial(){
        alert("Vamos a iniciar un reconocimiento facial");
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de Cámara Extra: <b>${this.resolucionDeCamaraExtra}</b></br>`;
    }
}

celularHuawei = new Celulares("Negro","150g","6'","full hd","2GB")
celularSamsung = new CelularAltaGama("Blanco","100g","5'","4K","6GB","Full HD")

document.write(`
    ${celularHuawei.mobileInfo()} <br>
    ${celularSamsung.mobileInfo()} <br>
    `)

