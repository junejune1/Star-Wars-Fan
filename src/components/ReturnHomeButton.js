import React from "react";

export default function ReturnHomeButton({ backToHome }) {
    return (
        <button id="btn-click"
            className="btn btn-warning btn-outline-dark"
            style={{ marginBottom: 5, fontSize: 16 }}
            onClick={backToHome}
        >
            Return Home
        </button>
    );
}
