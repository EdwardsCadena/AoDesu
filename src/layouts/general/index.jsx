import React from 'react';
// Componentes
import Header from '../../utils/header/index';
import HeaderMovil from '../../utils/HeaderMovil/index';
import Footer from '../../utils/footer/index';

const GeneralLayout = ({children}) => {
    return (
        <div id="ContainerContent" className="headerNormal">
            <Header />
            <HeaderMovil />
            {children}
            <Footer />
        </div>
    )
}

export default GeneralLayout;