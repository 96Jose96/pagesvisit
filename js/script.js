//1. Abre el archivo `index.html` en tu navegador.
//2. Cada vez que se recarga la página debe añadir una visita más
//3. Debe persistir el número aunque se cierre el navegador
//4. Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
//5. Toda la lógica tiene que estar en `script.js`


let visitas = document.getElementById('contadorVisitas');
const reset = document.getElementById('btnReestablecer');


const contador = () => {
    let contadorVisitas = localStorage.getItem('Visitas página');
    contadorVisitas++;
    visitas.textContent = contadorVisitas;
    updateItem(contadorVisitas);
}

const updateItem = (contadorVisitas) => {
    localStorage.setItem('Visitas página', `${contadorVisitas}`);
}

reset.addEventListener('click', () => {
    localStorage.setItem('Visitas página', 0);
    visitas.textContent = 0;
});

contador();

console.log(localStorage)