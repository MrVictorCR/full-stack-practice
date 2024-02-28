// Simple web Calculator

class Calculator{

    constructor(){
    }

    sumar(num1,num2){
        return alert(`Your result is ${parseInt(num1) + parseInt(num2)}`);
    }
    restar(num1,num2){
        return alert(`Your result is ${parseInt(num1) - parseInt(num2)}`);
    }
    dividir(num1,num2){
        return alert(`Your result is ${parseInt(num1) / parseInt(num2)}`);
    }
    multiplicar(num1,num2){
        return alert(`Your result is ${parseInt(num1) * parseInt(num2)}`);
    }
    pontenciar(num1,num2){
        return alert(`Your result is ${parseInt(num1) ** parseInt(num2)}`);
    }
    raizCuadrada(num){
        return alert(`Your result is ${Math.sqrt(num)}`);
    }
    raizCubica(num){
        return alert(`Your result is ${Math.cbrt(num)}`);
    }
}
const calculator = new Calculator();

alert(`Which function would you like to do?`)
let operation = prompt("1. Sumar,   " +
                       "2. Restar,   " + 
                       "3. Dividir,   " +
                       "4. Multiplicar,   " +
                       "5. Exponenciar,   " +
                       "6. Raiz Cuadrada,   " +
                       "7. Raiz Cubica");

if (operation != 5 || operation != 6 || operation != 7){
    let num1 = prompt("Cual es el primer numero?");
    let num2 = prompt("Cual es el segundo numero?");
    if (operation == 1){
        calculator.sumar(num1,num2);
    } else if (operation == 2){
        calculator.restar(num1,num2);
    } else if (operation == 3){
        calculator.dividir(num1,num2);
    } else if (operation == 4){
        calculator.multiplicar(num1,num2);
} else if (operation == 5){
    let num1 = prompt("Cual es el numero?");
    let exp = prompt("Cual es el exponente?");
    calculator.pontenciar(num1,exp);
} else if (operation == 6){
    let num = prompt("Cual es el numero del que quieres saber la raiz cuadrada?");
    calculator.raizCuadrada(num);
} else if (operation == 7){
    let num = prompt("Cual es el numero del que quieres saber la raiz cubica?");
    calculator.raizCubica(num);

} else alert("Opcion Incorrecta");
}