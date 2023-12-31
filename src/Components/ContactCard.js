// We are importing the use state function from the react library so that our component can use state.
import { useState } from 'react';

// Importing our material UI components.
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import "../styles/ContactCard.css";

function ContactCard(props) {
    const { contactInfo } = props;
    /*
     * Use react magic to maintain the state.
     *
     * "detailsShown" will be a boolean variable that determines whether the details are currently shown
     * "setDetailsShown" is a setter function that will let us change the value of "detailsShown"
     */
    const [detailsShown, setDetailsShown] = useState(false);

    /*
     * This is a function that will be invoked whenever the details button is clicked
     * It invokes the "setDetailsShown function which react provided to change the current state of detailsShown
     * We pass in a callback which will take the current value of detailsShown and invert it
     */
    const toggleDetails = () => {
        setDetailsShown((currentVal) => {
            return !currentVal;
        });
    }

    return (
        <>
            <ImageListItem key={contactInfo.picture.large} sx={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px', backgroundColor: 'white'}}>
                <img
                    srcSet={`${contactInfo.picture.large}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${contactInfo.picture.large}?w=248&fit=crop&auto=format`}
                    alt='Image not found'
                    loading="lazy"
                />
                <ImageListItemBar 
                    title={`${contactInfo.name.first} ${contactInfo.name.last}`}
                    position="below"
                    sx={{textAlign: 'center', fontFamily: 'Playfair Display, serif', letterSpacing: '1.5px', color: 'grey'}}
                />
                <button onClick={toggleDetails}>
                    {
                        // conditionally set the text on this button based on the value of "detailsShown" from our state
                        // using the ternary operator will select the first value if true, otherwise the second value
                        detailsShown ? 'Hide Details' : 'Show Details'
                    }
                </button>

                {
                    /* 
                     * conditionally show/hide the div below based on the value of "detailsShown" from our state
                     * using the && operator will short-circuit our logic if "detailsShown" is false
                     */
                    detailsShown &&
                    <div className="additional-details">
                        <ul>
                            <li>Phone: {contactInfo.phone}</li>
                            <li>Email: {contactInfo.email}</li>
                            <li>Address: {contactInfo.location.street.number} {contactInfo.location.street.name} {contactInfo.location.city}, {contactInfo.location.state} {contactInfo.location.postcode}
                            </li>
                        </ul>
                    </div>
                }
            </ImageListItem>

        </>
    )
}

export default ContactCard;