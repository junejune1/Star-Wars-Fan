import React from "react";

export default function PageButtons({ changePage }) {
    const pages = 9;
    const pagesButton = [];
    for (let i = 1; i <= pages; i++) {
        pagesButton.push(
            <button data-testid = {`page-${i}`} key={i} onClick={() => changePage("number", i)} className="btn btn-warning btn-outline-dark">
                {i}
            </button>
        );
    }

    return (
        <div>
            <button data-testid = "page-Previous" onClick={() => changePage("previous")} className="btn btn-dark" style={{ width: "auto", backgroundColor: "#E58308" }}>
                Previous
            </button>
            <button data-testid = "page-Next" onClick={() => changePage("next")} className="btn btn-dark" style={{ width: "auto", backgroundColor: "#E58308"}}>
                Next
            </button>
            {pagesButton}
        </div>
    );
}
