import React from 'react';
import {Table} from "react-bootstrap";

const Tables = ({table}) => {
    return (
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Куплен</th>
                </tr>
                </thead>
                <tbody>
                {
                    table && table.map(t => <tr>
                            <td>{t.name}</td>
                            <td>{t.total}</td>
                        </tr>
                    )
                }
                </tbody>
            </Table>
    );
};

export default Tables;