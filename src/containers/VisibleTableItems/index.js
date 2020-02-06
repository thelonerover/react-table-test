import React from 'react';
import { connect } from 'react-redux';
import TableRow from "../../components/Table/TableRow";

const mapStateToProps = state => {
    return {
        data: state.data
    }
}

export function VisibleTableItems({ data }) {
  return (
    <tbody>
        {data.map((item) => (
            <TableRow key={item.id}>
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