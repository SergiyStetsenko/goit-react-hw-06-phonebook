import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import "./GlobalStyles.css";
import { connect } from "react-redux";
 class App extends Component { 

  render() {
    const {items} = this.props.contacts;
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm />
        {items.length > 1 && <Filter />}
         <h2 >Contacts</h2>
         {items.length ?   
            <ContactList />           
           : (<p>There are no contacts here</p>
          )}
      </>
    );
  }
}

const mapStateToProps = (state) =>{
  return state;
}

export default connect(mapStateToProps)(App);


