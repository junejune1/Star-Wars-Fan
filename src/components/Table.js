import React from "react";
import TableHeader from "./TableHeader";

export default function Table({ rows }) {
    return (
        <div>
            <table data-testid="table-display"
                style={{ width: "80%", padding: 10, marginTop: 15 }}
                className="table table-dark table-striped margin-top table-hover shadows"
            >
                <TableHeader />
                <tbody>{rows}</tbody>
            </table>
        </div>
    );
}
