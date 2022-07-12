import React from "react"

export default function Membro(props){
    return(
        <div>
            <p>{ props.nome } <strong>{ props.sobreNome }</strong></p>
        </div>
    )
}