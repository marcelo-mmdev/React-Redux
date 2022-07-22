const Home = () => {
    const oq = 'Expressions';
    const data = {
        dia: 17,
        mes: "Nov",
        ano: 1987
    }
    return(
        <>
            <h3>Test de Template {oq}</h3>
            <p>Objeto {data.dia}</p>
        </>
    );
};
export default Home;