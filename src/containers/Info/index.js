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
                Выбран пользователь: <b>{dataItem && dataItem.firstName}</b>
            </span>
            <span className="info__item">
                Описание:
                <textarea value={dataItem && dataItem.description}></textarea>
            </span>
            <span className="info__item">
                Адрес проживания: <b>{dataItem && dataItem.address.streetAddress}</b>
            </span>
            <span className="info__item">
                Город: <b>{dataItem && dataItem.address.city}</b>
            </span>
            <span className="info__item">
                Провинция/штат: <b>{dataItem && dataItem.address.state}</b>
            </span>
            <span className="info__item">
                Индекс: <b>{dataItem && dataItem.address.zip}</b>
            </span>
        </div>
    );
}

export default connect(mapStateToProps, null)(Info);
