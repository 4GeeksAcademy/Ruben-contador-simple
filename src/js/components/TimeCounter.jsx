const TimeCounter = ({ counter }) => {


    return (
        <div>
            <h1>Tiempo desperdiciado en esta página</h1>
            <p className="fs-1">{counter[0].toString().length < 2 ? "0" + counter[0] : counter[0]}:{counter[1].toString().length < 2 ? "0" + counter[1] : counter[1]}:{counter[2].toString().length < 2 ? "0" + counter[2] : counter[2]}</p>
            {counter[0]>0? <h1 className="text-danger">¡Vete ya de aquí a hacer algo de verdad!</h1>:""}
        </div>
    );
};

export default TimeCounter;