const TimeCounter= ({counter})=>{


    return (
        <p>Tiempo: {counter[0].toString().length<2? "0"+counter[0] : counter[0]}:{counter[1].toString().length<2? "0"+counter[1] : counter[1]}:{counter[2].toString().length<2? "0"+counter[2] : counter[2]}</p>
    );
};

export default TimeCounter;