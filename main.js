const valorBase = 9635;

// Función para guardar los datos en Local Storage
function guardarDatos() {
    const nombre = document.getElementById("nombre").value;
    const barrio = document.getElementById("barrio").value;
    const litros = document.getElementById("litros");
    const litrosConsumidos = parseFloat(litros.value);


    const usuario = {
        nombre: nombre,
        barrio: barrio,
        litros: litrosConsumidos
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    mostrarConsumo();
}

// Función para calcular el valor del excedente según los excedentes
function calcularExcedente(litrosConsumidos) {
    const escalas = [
        { min: 0, max: 25, multiplicador: 0 },
        { min: 26, max: 30, multiplicador: 385 },
        { min: 31, max: 50, multiplicador: 770 },
        { min: 51, max: 80, multiplicador: 1926 },
        { min: 81, max: 499, multiplicador: 2697 },
    ];

    return escalas.reduce((total, rango) => {
        if (litrosConsumidos > rango.min) {
            const exceso = Math.min(litrosConsumidos, rango.max) - rango.min;
            total += exceso * rango.multiplicador;
        }
        return total;
    }, 0);
}

// Función para mostrar el consumo almacenado
function mostrarConsumo() {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
        const excedente = calcularExcedente(usuario.litros);
        const consumoTotal = valorBase + excedente;

        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <p>Nombre: ${usuario.nombre}</p>
            <p>Barrio: ${usuario.barrio}</p>
            <p>Litros Consumidos: ${usuario.litros}</p>
            <p>Consumo Total: $${consumoTotal}</p>
        `;
    }
    return( "su consumo es " + consumoTotal)
};



        


 