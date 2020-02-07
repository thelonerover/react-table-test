import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "../../components/Button";
import { filterData } from "../../actions";
import "./info.scss";

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
                type="text"
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <Button onClick={() => {onClick(text)}}>Filter</Button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
