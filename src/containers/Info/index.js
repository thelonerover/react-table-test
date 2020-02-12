import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const mapStateToProps = state => {
    return {
        dataItem: state.selectedDataItem
    }
}

export function Info({ dataItem }) {
    return (
        <div className="info">
            <div className="info__item">
                <b className="info__title">User:</b>
                <span className="info__content">{dataItem && dataItem.firstName}</span>
            </div>
            <div className="info__item">
                <b className="info__title">Description:</b>
                <textarea 
                    defaultValue={dataItem ? dataItem.description : ""}
                ></textarea>
            </div>
            <div className="info__item">
                <b className="info__title">Street address:</b>
                <span className="info__content">{dataItem && dataItem.address.streetAddress}</span>
            </div>
            <div className="info__item">
                <b className="info__title">City:</b>
                <span className="info__content">{dataItem && dataItem.address.city}</span>
            </div>
            <div className="info__item">
                <b className="info__title">State:</b>
                <span className="info__content">{dataItem && dataItem.address.state}</span>
            </div>
            <div className="info__item">
                <b className="info__title">ZIP:</b>
                <span className="info__content">{dataItem && dataItem.address.zip}</span>
            </div>
        </div>
    );
}

Info.propTypes = {
    dataItem: PropTypes.object
}

export default connect(mapStateToProps, null)(Info);
