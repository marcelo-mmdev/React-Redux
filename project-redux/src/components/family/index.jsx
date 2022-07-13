import React, {cloneElement} from "react"

export default function Family( props ){
    return(
        <div>
            {props.children.map( (el) => {
                return cloneElement(el, { ...props })
            })}
            {/* { cloneElement(props.children, { ...props }) } */}
        </div>
    )
}