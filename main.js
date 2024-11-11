const menu = "1- Calcular consumo, 2- Salir";
const opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
const valor = 9635

function consultaDeuda(opcionElegida){
     let deuda = parseFloat(prompt("ingrese cantidad de litros"))
     
     let precioTotal;
     
     while(isNaN(deuda)){
        alert("datos invalidos");
        deuda = parseInt(prompt("ingrese cantidad de litros"));
        break
        }
     if (deuda >= 0  && deuda <= 25 ){
       return valor;
    }
else if(deuda >= 26  && deuda <= 30 ){
        const excedente = (deuda - 25);
        const valorExcedente = excedente * 385;
        let precioTotal = valor + valorExcedente;
        return precioTotal;
    }
else if(deuda >= 31  && deuda <= 50 ){
        const excedente = (deuda - 25);
        const valorExcedente = excedente * 770;
        let precioTotal = valor + valorExcedente;
        return precioTotal;
    }
else if(deuda >= 51  && deuda < 81 ){
        const excedente = (deuda - 25);
        const valorExcedente = excedente * 1926;
        let precioTotal = valor + valorExcedente;
       return precioTotal;
    }
else if(deuda >= 81  && deuda < 500 ){
        const excedente = (deuda - 25);
        const valorExcedente = excedente * 2697;
        let precioTotal = valor + valorExcedente;
       return precioTotal;
    }
    return precioTotal ;
}

while(isNaN(opcionElegida)){
    alert("Ingrese un número válido");
    opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
    }

switch(opcionElegida){
    case 1 :
        let deuda = consultaDeuda(); 
        alert("Su consumo es de $" + deuda); 
        break;
         default: alert("Opción no válida.");
         break

    case 2 :   
        if (opcionElegida == 2){
            alert ("gracias por visitarnos")
        }
 
        }
 

    



 