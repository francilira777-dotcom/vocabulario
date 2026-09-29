let arrayIngles = [    ["Titanic", "Titanic", "Drama romántico"],
    ["Avatar", "Avatar", "Ciencia ficción"],
    ["The Godfather", "El padrino", "Drama criminal"],
    ["The Dark Knight", "El caballero de la noche", "Película de superhéroes"],
    ["Forrest Gump", "Forrest Gump", "Drama"],
    ["The Lion King", "El rey león", "Película animada"],
    ["Frozen", "Frozen: Una aventura congelada", "Película animada musical"],
    ["Toy Story", "Toy Story", "Película animada"],
    ["Finding Nemo", "Buscando a Nemo", "Película animada de aventura"],
    ["Jurassic Park", "Parque Jurásico", "Ciencia ficción y aventura"],
    ["Harry Potter and the Sorcerer's Stone", "Harry Potter y la piedra filosofal", "Fantasía"],
    ["The Lord of the Rings", "El señor de los anillos", "Fantasía épica"],
    ["Star Wars", "La guerra de las galaxias", "Ciencia ficción"],
    ["The Matrix", "Matrix", "Ciencia ficción"],
    ["Home Alone", "Mi pobre angelito", "Comedia familiar"],
    ["Shrek", "Shrek", "Comedia animada"],
    ["Inception", "El origen", "Ciencia ficción y suspenso"],
    ["The Avengers", "Los Vengadores", "Película de superhéroes"],
    ["Pirates of the Caribbean", "Piratas del Caribe", "Aventura y fantasía"],
    ["Back to the Future", "Volver al futuro", "Ciencia ficción y comedia"]
];
let titulos = document.getElementById("titulos");

titulos.innerHTML = `
    <th>Inglés</th>
    <th>Español</th>
    <th>Género</th>
`;
let tablaIngles = document.querySelector("section table tbody");

tablaIngles.innerHTML = "";

for (let i = 0; i < arrayIngles.length; i++) {

    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${arrayIngles[i][0]}</td>
        <td>${arrayIngles[i][1]}</td>
        <td>${arrayIngles[i][2]}</td>
    `;

    tablaIngles.appendChild(fila);
}


let arrayProgramacion = [
    ["&lt;h1&gt;", "Título principal", "Crea un encabezado principal en HTML"],
    ["&lt;p&gt;", "Párrafo", "Crea un párrafo de texto"],
    ["&lt;img&gt;", "Imagen", "Inserta una imagen"],
    ["&lt;a&gt;", "Enlace", "Crea un enlace o hipervínculo"],
    ["let", "Variable modificable", "Declara una variable que puede cambiar"],
    ["const", "Variable constante", "Declara una variable cuyo valor no se reasigna"],
    ["var", "Variable", "Declara una variable"],
    ["HTML", "Lenguaje de marcado", "Permite crear la estructura de una página web"],
    ["CSS", "Hojas de estilo", "Permite diseñar una página web"],
    ["JavaScript", "Lenguaje de programación", "Permite agregar interacción a una página"],
    ["array", "Arreglo", "Almacena varios valores en una variable"],
    ["for", "Ciclo", "Repite instrucciones varias veces"],
    ["if", "Condición", "Ejecuta código cuando se cumple una condición"],
    ["else", "Si no", "Ejecuta código cuando la condición no se cumple"],
    ["function", "Función", "Agrupa instrucciones que pueden ser reutilizadas"],
    ["string", "Cadena de texto", "Representa texto"],
    ["number", "Número", "Representa valores numéricos"],
    ["boolean", "Booleano", "Representa verdadero o falso"],
    ["class", "Clase", "Permite definir un grupo de objetos"],
    ["id", "Identificador", "Identifica un elemento HTML"]   
];

let titulosProgramacion = document.getElementById("titulosprogramacion");

titulosProgramacion.innerHTML = `
    <th>tecnico</th>
    <th>significado</th>
    <th>para que se usa</th>
`;

let tablaProgramacion = document.querySelectorAll("table")[1];
let cuerpoProgramacion = tablaProgramacion.querySelector("tbody");

cuerpoProgramacion.innerHTML = "";

for (let i = 0; i < arrayProgramacion.length; i++) {
    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${arrayProgramacion[i][0]}</td>
        <td>${arrayProgramacion[i][1]}</td>
        <td>${arrayProgramacion[i][2]}</td>
    `;

    cuerpoProgramacion.appendChild(fila);
}


