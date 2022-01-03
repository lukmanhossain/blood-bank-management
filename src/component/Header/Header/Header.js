import React from 'react';
import ContactForm from '../Contact/ContactForm';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ContactForm></ContactForm>
            <h2>This is home</h2>
        </div>
    );
};

export default Header;