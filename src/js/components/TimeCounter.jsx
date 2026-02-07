// ⚠️ OPORTUNIDAD DE MEJORA: Lógica muy compleja condensada en una línea
// ✅ SOLUCIÓN: Crear función helper con padStart() para formatear números
const TimeCounter = ({ counter }) => {
    // 💡 SUGERENCIA: Crear función helper para evitar código duplicado
    // const formatNumber = (num) => num.toString().padStart(2, '0');

    return (
        <div className="container mt-5">  {/* ✅ Mejor estructura con container */}
            <div className="card shadow-lg">
                <div className="card-body text-center p-4">
                    <h1 className="card-title mb-4">Tiempo desperdiciado en esta página</h1>
                    
                    {/* ❌ PROBLEMA: Lógica muy compleja y repetitiva en una sola línea */}
                    {/* ✅ MEJORA: Usar formatNumber(counter[0]) en lugar de esto */}
                    <p className="display-1 fw-bold">
                        {counter[0].toString().length < 2 ? "0" + counter[0] : counter[0]}:
                        {counter[1].toString().length < 2 ? "0" + counter[1] : counter[1]}:
                        {counter[2].toString().length < 2 ? "0" + counter[2] : counter[2]}
                    </p>
                    
                    {/* 🎉 PATRÓN POSITIVO: Renderizado condicional creativo y funcional */}
                    {counter[0] > 0 ? (  {/* ⚠️ Agregar espacios alrededor de > */}
                        <h2 className="text-danger mt-3">
                            ¡Vete ya de aquí a hacer algo de verdad!
                        </h2>
                    ) : ""}
                </div>
            </div>
        </div>
    );
};

export default TimeCounter;