import React from "react";

function TableRow({ character }) {
    return (
        <tr className="altFont" data-testid="table-row-display">
            <td>{character.name}</td>
            <td>{character.birth_year}</td>
            <td>{character.heightConverted}</td>
            <td>{character.weight}</td>
            <td>{character.homeworldName}</td>
            <td>{character.speciesName}</td>
            <td>{character.films}</td>
            <th>{character.vehicles}</th>
            <th>{character.starships}</th>
        </tr>
    );
}

export default TableRow;
