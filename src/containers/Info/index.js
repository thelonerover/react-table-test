import React from "react";
import { connect } from "react-redux";
import "./info.scss";

const mapStateToProps = state => {
    return {
        dataItem: state.selectedDataItem
    }
}

export function Info({ dataItem }) {
    return (
        <div className="info">
            <span className="info__item">
                User: <b>{dataItem && dataItem.firstName}</b>
            </span>
            <span className="info__item">
                Description:
                <textarea value={dataItem && dataItem.description}></textarea>
            </span>
            <span className="info__item">
                Street address: <b>{dataItem && dataItem.address.streetAddress}</b>
            </span>
            <span className="info__item">
                City: <b>{dataItem && dataItem.address.city}</b>
            </span>
            <span className="info__item">
                State: <b>{dataItem && dataItem.address.state}</b>
            </span>
            <span className="info__item">
                ZIP: <b>{dataItem && dataItem.address.zip}</b>
            </span>
        </div>
    );
}

export default connect(mapStateToProps, null)(Info);
