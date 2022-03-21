import React, { useEffect, useState, memo } from "react";

function LoadingMessages({ pageNumber }) {
    const [loadingMessage, setLoadingMessage] = useState("I sense much fear in you");
    useEffect(() => {
        const messages = [
            "Your focus determines your reality.",
            "The Force will be with you. Always",
            "Do. Or do not. There is no try",
            "There is no emotion, there is peace.",
            "There is no ignorance, there is knowledge.",
            "There is no passion, there is serenity.",
            "There is no chaos, there is harmony.",
            "There is no death, there is the Force.",
            "We must keep our faith in the Republic",
            "Chewie, we’re home",
            "I’m one with the Force. The Force is with me",
            "I am a Jedi, like my father before me",
            "When gone am I, the last of the Jedi will you be",
            "This ship that made the Kessel run in less than twelve parsecs",
        ];
        const i = Math.floor(Math.random() * messages.length);
        setLoadingMessage(messages[i]);
    }, [pageNumber]);

    return (
        <div data-testid = "loading-message">
            <button data-testid = "loading-message-button" style={{ marginTop: 60, padding: 20, fontSize: 20 }} className="btn btn-warning">
                {loadingMessage}
                <span className="spinner-grow spinner-grow-sm"></span>
            </button>
        </div>
    );
}
export default memo(LoadingMessages);
