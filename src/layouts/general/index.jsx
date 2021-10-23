import React from 'react';
// Componentes

const GeneralLayout = ({children}) => {
    return (
        <div id="ContainerContent" className="headerNormal">
            {children}
        </div>
    )
}

export default GeneralLayout;