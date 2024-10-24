const MascotasSource = [];

// Función para obtener un elemento del DOM
const obtenerElemento = (selector) => document.querySelector(selector);

// Definición de los elementos utilizados
const elementos = {
    crearButton: '#crear-btn',
    popup: '#popup',
    closePopup: '#close-popup',
    crearButtonFromPop: '#crear-btn-popup',
    inputPopupNombre: '#Nombre',
    inputPopupRaza: '#Raza',
    tabla: '#table-mascotas'
};

// Limpiar el contenido de la tabla
const limpiarTabla = () => {
    const tabla = obtenerElemento(elementos.tabla);
    tabla.innerHTML = '';
};

// Pintar los elementos en la tabla
const renderizarMascotas = () => {
    limpiarTabla();
    const tabla = obtenerElemento(elementos.tabla);
    const filasHTML = MascotasSource.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.nombre}</td>
            <td>${item.raza}</td>
            <td><button>Borrar</button><button>Actualizar</button></td>
        </tr>
    `).join('');
    tabla.innerHTML = filasHTML;
};

// Abrir o cerrar el popup
const togglePopup = () => {
    const popup = obtenerElemento(elementos.popup);
    popup.classList.toggle('hidden');
};

// Configurar los eventos de apertura/cierre del popup
const configurarEventosPopup = () => {
    const elementosParaToggle = [
        obtenerElemento(elementos.crearButton),
        obtenerElemento(elementos.closePopup)
    ];
    elementosParaToggle.forEach(elemento => {
        elemento.addEventListener('click', togglePopup);
    });
};

// Agregar eventos para la creación de una mascota
const configurarEventoCrearMascota = () => {
    const btnCrearPopup = obtenerElemento(elementos.crearButtonFromPop);
    btnCrearPopup.addEventListener('click', () => {
        const nombre = obtenerElemento(elementos.inputPopupNombre).value;
        const raza = obtenerElemento(elementos.inputPopupRaza).value;
        crearMascota(nombre, raza);
    });
};

// Limpiar los campos del popup
const limpiarPopup = () => {
    obtenerElemento(elementos.inputPopupNombre).value = '';
    obtenerElemento(elementos.inputPopupRaza).value = '';
};

// Crear una nueva mascota y actualizar la tabla
const crearMascota = (nombre, raza) => {
    MascotasSource.push({
        id: MascotasSource.length + 1,
        nombre,
        raza
    });
    limpiarPopup();
    togglePopup();
    renderizarMascotas();
};

// Cargar todos los eventos
const cargarEventos = () => {
    configurarEventosPopup();
    configurarEventoCrearMascota();
};

// Función principal que se ejecuta al cargar la ventana
const main = () => {
    cargarEventos();
};

// Ejecutar la función principal al cargar la ventana
window.onload = main;
