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
        <div className="Info">
            <span className="info__item">
                Выбран пользователь: <b>{dataItem.firstName}</b>
            </span>
            <span className="info__item">
                Описание:
                <textarea value={dataItem.description}></textarea>
            </span>
            <span className="info__item">
                Адрес проживания: <b>{dataItem.adress}</b>
            </span>
            <span className="info__item">
                Город: <b>{dataItem.city}</b>
            </span>
            <span className="info__item">
                Провинция/штат: <b>{dataItem.state}</b>
            </span>
            <span className="info__item">
                Индекс: <b>{dataItem.index}</b>
            </span>
        </div>
    );
}

export default connect(mapStateToProps, null)(Info);
