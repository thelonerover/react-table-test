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

    const filter = filter => {
        filterItems(data, filter);
    }

    const handleChange = e => {
        setText(e.target.value);
    }

    return (
        <div className="filter">
            <input
                className="filter__input"
                type="text"
                value={text}
                onChange={handleChange}
            />
            <button 
                className="button button_primary filter__button"
                onClick={e => {
                    e.preventDefault();
                    filter(text);
                }
            }>Find</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
