import React from "react";
interface ButtonProps{
    type: "primary" | "secondary";
    handler: () => void;
    label: string;
}

function Button(props: ButtonProps) {
    return (
        <button className={`button-${props.type}`}
            onClick={props.handler}
            >{props.label}
        </button>
    )
}

export default Button;