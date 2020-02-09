import React, { useState } from "react";
import { connect } from "react-redux";
import { filterData } from "../../actions";

const mapStateToProps = state => {
    return {
        data: state.dataCache
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterItems: (data, filter) => {dispatch(filterData(data, filter))}
    }
}

export function Filter({ data, filterItems }) {
    const [text, setText] = useState("");

    const onClick = filter => {
        filterItems(data, filter);
    }

    return (
        <div className="filter">
            <input
                className="filter__input"
                type="text"
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button 
                className="button button_primary filter__button"
                onClick={e => {
                    e.preventDefault();
                    onClick(text);
                }
            }>Find</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
