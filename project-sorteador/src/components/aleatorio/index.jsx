import React from "react"

export default function Aleatorio(props) {
    const { max, min } = props;
    const numAleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <>
            <p>
                <strong>De: </strong>{ min }
            </p>
            <p>
                <strong>Até: </strong>{ max }
            </p>
            <p>
                <strong>Numero Sorteado: </strong>{ numAleatorio }
            </p>
        </>
    )
}