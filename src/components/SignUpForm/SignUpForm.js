import React from 'react';
import UITextInput from '../Inputs/UITextInput';

const SignUpForm = () => {
    return (
        <>
            <UITextInput icon="firstname" version="default" placeholder="Your firstname" />
            <UITextInput icon="lastname" version="default" placeholder="Your lastname" />
            <UITextInput icon="email" version="default" placeholder="Email" />
            <UITextInput icon="mobile" version="default" placeholder="Mobile No" />
            <UITextInput icon="password" version="default" placeholder="Password" />
        </>
    )
}

export default SignUpForm;