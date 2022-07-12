import React from "react"
import Membro from "../membro"


export default function Family( props ){
    return(
        <div>
            <Membro nome='Marcelo' sobreNome={ props.sobreNome } />
            <Membro nome='Marconi' sobreNome='Silva' />
            <Membro nome='Maciel' {...props} />
        </div>
    )
}