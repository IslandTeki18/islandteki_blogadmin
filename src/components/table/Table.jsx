import React from "react";
import "./Table.scss";

const Table = (props) => {
    return (
        <table className="dkTable table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Post ID</th>
                    <th scope="col">Post Name</th>
                    <th scope="col">Author</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;
