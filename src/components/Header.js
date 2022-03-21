import React, { memo } from "react";

function Header() {
    return <p data-testid = "header-p-1" style={{ fontSize: 60 }}>Star Wars</p>;
}

export default memo(Header);
