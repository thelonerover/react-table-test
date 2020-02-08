import React from "react";
import { connect } from "react-redux";
import { addDataItem } from "../../actions";
import Input from "../../components/Input";
import Button from "../../components/Button";
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
  const formSubmit = async ({ id, firstName, lastName, email, phone }) => {
    addDataItem({
      id,
      firstName,
      lastName,
      email,
      phone
    });
  }

  return (
    <form className="inputForm">
      <Input 
        type="text"
        className="inputForm__input"
        placeholder="id"
      />
      <Input 
        type="text"
        className="inputForm__input"
        placeholder="Name"
      />
      <Input 
        type="text"
        className="inputForm__input"
        placeholder="Last Name"
      />
      <Input 
        type="email"
        className="inputForm__input"
        placeholder="E-mail"
      />
      <Input 
        type="tel"
        className="inputForm__input"
        placeholder="Phone"
      />
      <Button
        type="submit"
        onClick={e => {
          e.preventDefault();
          formSubmit({id: "12", firstName: 'asd', lastName: 'asd', email: 'asd', phone: 'asd'});
      }}
      >Add item</Button>
    </form>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);