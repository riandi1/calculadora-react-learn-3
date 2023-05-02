import React from "react";

function Button(props) {

    return (
        <span className={`num ${props.addClass}`} onClick={() => props.handleClick(props.children)}>
            <i>
                {props.children}
            </i>
        </span>
    );
}
export default Button;