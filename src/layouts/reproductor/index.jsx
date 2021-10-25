import React from 'react';
// Componentes
import HeaderMovil from '../../utils/HeaderMovil/index';
import Footer from '../../utils/footer/index';

const ReproductorLayout = ({children}) => {
    return (
        <div id="ContainerContent" className="headerReproductor">
            <HeaderMovil id="HeaderMovilPC" />
            {children}
            <Footer />
        </div>
    )
}

export default ReproductorLayout;