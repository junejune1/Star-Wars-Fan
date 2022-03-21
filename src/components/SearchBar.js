import React, { useState, memo } from "react";

function SearchBar(props) {
    const [textBoxValue, setTextBoxValue] = useState("");

    const pressedSubmit = e => {
        e.preventDefault();
        props.handleSearch(textBoxValue);
        setTextBoxValue("");
    };

    return (
        <form onSubmit={pressedSubmit}>
            <button data-testid="search-bar" className="btn btn-warning btn-outline-dark" style={{ width: "auto" }}>
                Search Characters
            </button>
            <input
                data-testid="input-box"
                onChange={e => setTextBoxValue(e.target.value)}
                className="col-md-5 margin-top altFont"
                type="text"
                placeholder="Help me, Obi-Wan Kenobi. You’re my only hope."
                value={textBoxValue}
            />
        </form>
    );
}

export default memo(SearchBar);
