import React, { memo } from "react";

function TableHeader() {
    return (
        <thead>
            <tr data-testid = "table-header" className="table-warning" style={{ color: "black", backgroundColor: "#DEDD8C" }}>
                <th>Name</th>
                <th>Birthdate</th>
                <th>Height</th>
                <th>Weight (lb)</th>
                <th>Planet</th>
                <th>Species</th>
                <th>Films</th>
                <th>Vehicles</th>
                <th>Starships</th>
            </tr>
        </thead>
    );
}

export default memo(TableHeader);
