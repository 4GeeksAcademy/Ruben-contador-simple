import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

// ❌ PROBLEMA CRÍTICO: Variables globales mutables (anti-patrón en React)
// ✅ SOLUCIÓN: Usar useState dentro de un componente Counter
let minutes = 0  // ⚠️ Agregar espacios alrededor de =
let hours = 0
let seconds = 0;

const root = ReactDOM.createRoot(document.getElementById('root'))  // ⚠️ Agregar espacios

// ❌ PROBLEMA CRÍTICO: setInterval en scope global sin cleanup
// ❌ Re-renderiza TODO el árbol de componentes cada segundo (performance)
// ✅ SOLUCIÓN: Mover esta lógica a un componente con useState + useEffect
const interval = setInterval(() => {  // ⚠️ Agregar espacios
    seconds++;
    if (seconds > 59) {  // ⚠️ Agregar espacio después de if y alrededor de >
        seconds = 0;
        minutes++;
    }
    if (minutes > 59) {
        minutes = 0;
        hours++
    };

    let data = [hours, minutes, seconds];

    // ❌ ANTI-PATRÓN: Llamar a root.render() repetidamente
    // ✅ React debe manejar las actualizaciones automáticamente con useState
    root.render(
        <React.StrictMode>
            <Home contador={data} />
        </React.StrictMode>,
    )
}, 1000)
