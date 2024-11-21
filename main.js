//preentrega2 (variables,funciones,objetos, arrays y metodos de orden superior)
//CLASES 

class Usuario{
    constructor (nombre , apellido){
        this.nombre = nombre;
        this.apellido = apellido
    }
}


//FUNCIONES
//funcion para detectar usuarios repetidos
function nombreUsuariounico(){
    let nombreUsuario = prompt("ingrese su nombre")
    let nombreExistente = usuario.some((el) =>{
        return el.nombre.toLowerCase() == nombreUsuario.toLowerCase 
    })
    while(nombreExistente){
        alert("nombre existente")
        nombreUsuario = prompt("ingrese su nombre")
        nombreExistente = usuario.some((el) =>{
        return el.nombre.toLowerCase() === nombreUsuario.toLowerCase();
    })
}
return nombreUsuario;
}

//funcion para ingresar usuarios
function anotarse(){
    const nombre = nombreUsuariounico();
    const apellido = prompt ("ingrese su apellido");

    const alta = new Usuario (nombre , apellido);

    usuario.push(alta);
     console.log (usuario);
    alert ("usuario creado")
}

//funcion para eliminar usuarios
function eliminar (){
   
}




//funcion para consultar deuda
function litros(){
    let deuda = parseFloat(prompt("ingrese cantidad de litros"));
    while(isNaN(deuda)){
        alert("dato ingresado invalido")
        deuda = parseFloat(prompt("ingrese cantidad de litros"));
    }
    return deuda;
}

// funcion para calcular valor o excedente
function calcularExcedente(deuda) {
    const escalas = [
        { min: 0, max: 25, multiplicador: 0 },
        { min: 26, max: 30, multiplicador: 385 },
        { min: 31, max: 50, multiplicador: 770 },
        { min: 51, max: 80, multiplicador: 1926 },
        { min: 81, max: 499, multiplicador: 2697 },
    ];

    return escalas.reduce((total, rango) => {
        if (deuda > rango.min) {
            const exceso = Math.min(deuda, rango.max) - rango.min;
            total = exceso * rango.multiplicador;
        }
        return total;
    }, 0);
}

// funcion para saber el valor total
 function consumo()
 { 
    const valor = 9635
    const cantidadLitros = litros();
    const excedente = calcularExcedente(cantidadLitros);
    const consumoTotal = valor + excedente;
    return consumoTotal;
}



//INICIO PROGRAMA
const menu = "1-Agregar Usuario, 2-Calcular consumo, 3-Darse de baja,  0- Salir";
const opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
//const valor = 9635
let usuario = [ 
    new Usuario ("marina" , "cabrera"),
    new Usuario ("debora" , "olguin"),
    new Usuario ("ramon" , "miranda")
]


while(isNaN(opcionElegida)){
    alert("Ingrese un número válido");
    opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
    }

switch(opcionElegida){
    case 1:
         anotarse();
    break;

    case 2 :
        let precioFinal = consumo(); 
        alert("Su consumo es de $" + precioFinal); 
        break;

    case 3 : eliminar ();
    
    
    case 0 :   
        if (opcionElegida == 0){
            alert ("gracias por visitarnos")
        }
 
        opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
        }


        


 