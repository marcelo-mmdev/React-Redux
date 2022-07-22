const Butao = () => {
    const eventoButao = (e) => {
        return (
            console.log(e),
            console.log("Foi massa")
        )
    }

    const renderTela = (r) => {
        if (r) {
            return (
                <h1>Renderizando na tela true</h1>
            )
        } else {
            return (
                <h2>Renderizando com false</h2>
            )
        }

    }

    return (
        <>
            <button onClick={eventoButao}>Clique aqui!</button>
            {/* {renderTela(true)} */}
            {renderTela(false)}
        </>
    )
};
export default Butao;