// Importing dependencies.
import React, { Component } from 'react';
import axios from 'axios';

// Importing styles.
import './App.css';

/**
 * Create our App Component as a class so that we can define a constructor
 * method and define the state.
 */
class App extends Component {

  // Constructor method which will initialize the "state" property on the App object.
  // We will add an empty array of contacts when it is created.
  constructor() {
    super();

    // The state property is meant to keep track of any data that our component cares about.
    // It's an object that you can add anything to.
    this.state = {
      contacts: []
    };
  }

  // The componentDidMount() method runs after the component output has been rendered to the DOM.
  // React will detect that we have included this method on our App component and automatically invoke it.
  componentDidMount() {
    // Fetch some random contacts from this API and update the contacts in our state
    axios.get("https://randomuser.me/api?results=25")
    .then((response) => {
      const contacts = response.data.results;
      // Overwrite the state of this App component with an object containing the contacts we just fetched
      this.setState({ contacts });
    });
  }

  render() {
    return (
      <>
        <h1>Address Book</h1>
        {
          this.state.contacts.map((contact, index) => {
            return (
              <h2>{`${contact.name.first} ${contact.name.last}`}</h2>
            );
          })
        }
      </>
    );
  }
}

export default App;
