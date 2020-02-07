import React from 'react';
import { connect } from 'react-redux';
import TableRow from "../../components/TableRow";
import { getDataItem } from "../../actions";

const mapStateToProps = state => {
    return {
        data: state.visibleData.slice((state.currentPage - 1) * state.dataPerPage, state.dataPerPage * state.currentPage)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataItem: item => {dispatch(getDataItem(item))}
    }
}

export function VisibleTableItems({ data, getDataItem }) {
    return (
        <tbody>
            {data.map((item, index) => (
                //Got a sneaky bug here. I wanted to use item id's as keys, but they seem to have doubles causing accidental item duplication.
                <TableRow 
                    key={index}
                    onClick={() => {getDataItem(item)}}
                >
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

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTableItems);
