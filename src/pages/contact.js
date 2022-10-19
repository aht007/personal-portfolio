import React from 'react';
import "./contact.css"
import Separator from '../components/Shared/separator';
import SocialContact from "../components/Social";

const Contact = () => {
    return (
        <>
            <div className='contact-title'>
                Contact
            </div>
            <Separator />
            <p className='paragraph'>
                Want to get in touch with me...? Contact me on any of the below Platforms:
            </p>
            <SocialContact />

        </>
    );
};

export default Contact;