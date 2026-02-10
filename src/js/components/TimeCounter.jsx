const TimeCounter = ({ counter }) => {

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    }

    return (
        <div>
            <div className="reloj bg-body-secondary rounded-circle mx-auto">
                <span className="manecilla"></span>
            </div>
            <h1>Tiempo desperdiciado en esta página</h1>
            <p className="fs-1">
                {formatTime(counter[0])}:
                {formatTime(counter[1])}:
                {formatTime(counter[2])}
            </p>
            {counter[0] > 0 && (
                <h1 className="text-danger">
                    ¡Vete ya de aquí a hacer algo de verdad!
                    </h1>
                )}
        </div>
    );
};

export default TimeCounter;