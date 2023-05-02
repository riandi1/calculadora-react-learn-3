import React from "react";

function Screen(props) {
    return (
        <input
            type="text"
            className="value"
            readOnly
            name="txt"
            value={props.input}
            onChange={props.handleInput}
        />
    );
}

export default Screen;