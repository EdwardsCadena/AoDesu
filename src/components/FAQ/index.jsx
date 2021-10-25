import * as React from 'react';
import AccordionFAQ from './accordion.jsx';

const FAQ = () => {
    return ( 
    <div className="content">
        <div className="content-padd">
            <div className="FAQ-container">
                <h1>Preguntas Frecuentes</h1>
                <AccordionFAQ />
            </div>
        </div>
    </div>
    )  
}

export default FAQ;
