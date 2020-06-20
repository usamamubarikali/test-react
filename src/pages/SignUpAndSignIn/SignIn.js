import React from 'react';

import SignIn from '../../components/SignUpAndSignIn/SignIn';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default () => (
	<div>
        <Header transparent/>
        <SignIn />
        <Footer absolute/>
    </div>
);