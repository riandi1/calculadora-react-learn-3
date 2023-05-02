import React from "react";

function Button(props) {

    return (
        <span className={`num clear`} onClick={() => props.handleClick()}>
            <i>
                {props.children}
            </i>
        </span>
    );
}
export default Button;