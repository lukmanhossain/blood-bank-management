import React from 'react';
import BigProject from '../../BigProject/BigProject';
import Ourteam from '../../Ourteam/Ourteam';
import ContactForm from '../Contact/ContactForm';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <div>
            <NavBar></NavBar>
            <ContactForm></ContactForm>
            <Ourteam></Ourteam>
            <BigProject></BigProject>
        </div>
    );
};

export default Header;