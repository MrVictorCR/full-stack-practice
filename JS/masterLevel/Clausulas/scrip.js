// - Clausure - //

// Una clausura es una funcion que retorna otra funcion

"strict mode";

const cambiarTamaño = tamaño => {
    return () => {
        document.querySelector(".texto").computedStyleMap.fontSize = `${tamaño}px`;
    }
}

px12 = cambiarTamaño(12);
px16 = cambiarTamaño(16);
px20 = cambiarTamaño(20);

document.querySelector(".px12").addEventListener("click", px12);
document.querySelector(".px16").addEventListener("click", px16);
document.querySelector(".px20").addEventListener("click", px20);