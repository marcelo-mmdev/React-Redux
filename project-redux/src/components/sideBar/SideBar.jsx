import React from "react"

export default function SideBar(props) {

    const status = props.titulo3 >= 8 ? 'Continuar' : 'Finalizar';
    const valor = Math.ceil(props.titulo3)

    console.log(props);
    return (
        <>
            <h2>{ props.titulo1 }</h2>
            <p>{ valor }</p>
            <p>{ status }</p>
        </>
    )
};