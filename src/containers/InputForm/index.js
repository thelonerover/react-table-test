import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addDataItem } from "../../actions";
import "./inputForm.scss";

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
  const [formFilled, setformFilled] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showFields, setshowFields] = useState(false);

  useEffect(() => {
    setformFilled(checkFormFill())
  });

  const formSubmit = (data) => {
    addDataItem(data);
  }

  const handleChange = (e, setFieldState) => {
    setFieldState(e.target.value);
  }

  const checkFormFill = () => {
    if (id === "" || firstName === "" || lastName === "" || email === "" || phone === "") {
      return false;
    }
    return true;
  }

  return (
    <form className="inputForm">
      <button
        type="button"
        onClick={e => {
            e.preventDefault();
            setshowFields(!showFields);
        }}
      >Add item</button>
      {
        showFields && <div className="inputForm__fields">
          <input 
            type="text"
            name="id"
            className="inputForm__input"
            placeholder="id"
            required={true}
            onChange={e =>{handleChange(e, setId)}}
          />
          <input 
            type="text"
            name="firstName"
            className="inputForm__input"
            placeholder="Name"
            required={true}
            onChange={(e) =>{handleChange(e, setFirstName)}}
          />
          <input 
            type="text"
            name="lastName"
            className="inputForm__input"
            placeholder="Last Name"
            required={true}
            onChange={(e) =>{handleChange(e, setLastName)}}
          />
          <input 
            type="email"
            name="email"
            className="inputForm__input"
            placeholder="E-mail"
            required={true}
            onChange={(e) =>{handleChange(e, setEmail)}}
          />
          <input 
            type="tel"
            name="phone"
            className="inputForm__input"
            placeholder="Phone"
            required={true}
            onChange={(e) =>{handleChange(e, setPhone)}}
          />
          <button
            type="submit"
            disabled={formFilled ? false : true}
            onClick={e => {
                e.preventDefault();
                formSubmit({id, firstName, lastName, email, phone});
            }}
          >Add item</button>
        </div>
      }
    </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);