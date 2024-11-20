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
       const excedente = deuda - 25;
       const valorExcedente = excedente * 385;
       let precioTotal = valor + valorExcedente;
       return precioTotal;
   }
else if(deuda >= 31  && deuda <= 50 ){
       const excedente = deuda - 25;
       const valorExcedente = excedente * 770;
       let precioTotal = valor + valorExcedente;
       return precioTotal;
   }
else if(deuda >= 51  && deuda < 81 ){
       const excedente = deuda - 25;
       const valorExcedente = excedente * 1926;
       let precioTotal = valor + valorExcedente;
      return precioTotal;
   }
else if(deuda >= 81  && deuda < 500 ){
       const excedente = deuda - 25;
       const valorExcedente = excedente * 2697;
       let precioTotal = valor + valorExcedente;
      return precioTotal;
   }
   return precioTotal ;
}



//INICIO PROGRAMA
const menu = "1-Agregar Usuario, 2-Calcular consumo, 3-Darse de baja,  0- Salir";
const opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
const valor = 9635
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
        let deuda = consultaDeuda(); 
        alert("Su consumo es de $" + deuda); 
        break;
         default: alert("Opción no válida.");
         opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
         break

    case 3 : eliminar ();
    
    
    case 0 :   
        if (opcionElegida == 0){
            alert ("gracias por visitarnos")
        }
 
        opcionElegida = parseInt(prompt("Ingrese la opción: " + menu));
        }
 
 