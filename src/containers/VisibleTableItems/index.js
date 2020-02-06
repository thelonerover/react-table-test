import React from 'react';
import { connect } from 'react-redux';
import TableRow from "../../components/Table/TableRow";

const mapStateToProps = state => {
    return {
        data: state.data.slice((state.currentPage - 1) * state.dataPerPage, state.dataPerPage * state.currentPage)
    }
}

export function VisibleTableItems({ data }) {
    console.log(data)
    return (
        <tbody>
            {data.map((item, index) => (
                <TableRow key={index}>
                    <td className="table__item">{item.id}</td>
                    <td className="table__item">{item.firstName}</td>
                    <td className="table__item">{item.lastName}</td>
                    <td className="table__item">{item.email}</td>
                    <td className="table__item">{item.phone}</td>
                </TableRow>
            ))}
        </tbody>
    );
}

export default connect(mapStateToProps, null)(VisibleTableItems);
