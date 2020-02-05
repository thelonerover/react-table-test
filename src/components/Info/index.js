import React from "react";
import "./info.scss";

function Info() {
  return (
    <div className="Info">
        <span className="info__item">
            Выбран пользователь <b>Sue Corson</b>
        </span>
        <span className="info__item">
            Описание:
            <textarea>
                et lacus magna dolor...
            </textarea>
        </span>
        <span className="info__item">
            Адрес проживания: <b>9792 Mattis Ct</b>
        </span>
        <span className="info__item">
            Город: <b>Waukesha</b>
        </span>
        <span className="info__item">
            Провинция/штат: <b>WI</b>
        </span>
        <span className="info__item">
            Индекс: <b>22178</b>
        </span>
    </div>
  );
}

export default Info;
