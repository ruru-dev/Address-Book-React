// Importing dependencies.
// We need to import the component class from the react module because we are using a class component.
// When we use a class component, it must extend the generic component class written by react.
import { Component } from 'react';
import axios from 'axios';

// Importing styles.
import './App.css';

// Importing components
import ImageList from '@mui/material/ImageList';
import ContactCard from './components/ContactCard.js'

/**
 * Create our App Component as a class so that we can define a constructor
 * method and define the state.
 * The extends keyword means we are taking this existing class (template) which is component and making a duplicate class with additional functionality.
 */
class App extends Component {

  // Constructor method which will initialize the "state" property on the App object.
  // We will add an empty array of contacts when it is created.
  // The super method will invoke the constructor from our parent class.
  constructor() {
    super();

    // The state property is meant to keep track of any data that our component cares about.
    // It's an object that you can add anything to.
    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      // Returning a react fragment which acts as a top level element.
      <>
        <h1 className='title'>Address Book</h1>
        <ImageList sx={{ width: 1000, margin: 'auto', 'margin-top': '20px'}} cols={4} gap={20}>
        {
          // Loop over every contact in our contacts array
          this.state.contacts.map((contact, index) => {
            return (
              // Create a ContactCard component and supply the info for the contact as a prop.
              // We an supply any information that the component needs as a prop (attribute).
              <ContactCard contactInfo={ contact } />
            );
          })
        }
        </ImageList>
      </>
    );
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
}

export default App;
