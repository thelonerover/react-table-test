import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addDataItem } from "../../actions";

const mapStateToProps = state => {
  return {
    data: state.dataCache
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addDataItem: item => {dispatch(addDataItem(item))}
  }
}

function InputForm({ addDataItem }) {
  const [formFilled, setFormFilled] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });
  const [showFields, setshowFields] = useState(false);

  const formSubmit = (data) => {
    addDataItem(data);
  }

  const checkFormFill = () => {
    for (let field in formData) {
      if (formData[field] === "") {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    setFormFilled(checkFormFill())
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form className="inputForm">
      <button
        className="button button_outlined inputForm__button"
        type="button"
        onClick={e => {
            e.preventDefault();
            e.target.textContent = showFields ? "Show input form" : "Hide input form"
            setshowFields(!showFields);

        }}
      >Show input form</button>
      {
        showFields && <div className="inputForm__fields">
          <input 
            type="text"
            name="id"
            className="inputForm__input"
            placeholder="id"
            required={true}
            onChange={e =>{handleChange(e)}}
            value={formData.id}
          />
          <input 
            type="text"
            name="firstName"
            className="inputForm__input"
            placeholder="Name"
            required={true}
            onChange={(e) =>{handleChange(e)}}
            value={formData.firstName}
          />
          <input 
            type="text"
            name="lastName"
            className="inputForm__input"
            placeholder="Last Name"
            required={true}
            onChange={(e) =>{handleChange(e)}}
            value={formData.lastName}
          />
          <input 
            type="email"
            name="email"
            className="inputForm__input"
            placeholder="E-mail"
            required={true}
            onChange={(e) =>{handleChange(e)}}
            value={formData.email}
          />
          <input 
            type="tel"
            name="phone"
            className="inputForm__input"
            placeholder="Phone"
            required={true}
            onChange={(e) =>{handleChange(e)}}
            value={formData.phone}
          />
          <button
            className="button button_primary inputForm__button-primary"
            type="submit"
            disabled={formFilled ? false : true}
            onClick={e => {
                e.preventDefault();
                formSubmit(formData);
            }}
          >Add item</button>
        </div>
      }
    </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);