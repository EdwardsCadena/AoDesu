import React from 'react';
import { Link } from 'react-router-dom';

function listOrder(){
    const CapsContainer = document.querySelector('.caps-list');
    const btnCaps = document.querySelector('.caps-options')

    CapsContainer.classList.toggle('lastFirst');
    if(CapsContainer.classList.contains('lastFirst')){
        btnCaps.classList.add('lastFirst');
    }else{
        btnCaps.classList.remove('lastFirst');
    }
}

function CapsList(props){
    return(
        <div className="caps">
            <h2 className="caps-title">
                <i className="fa fa-list" style={{color: '#00FFFF'}}></i> Listado De Episodios
            </h2>
            <div className="caps-options">
                <button onClick={listOrder}>
                    <div className="ToLower"><i className="fas fa-sort-amount-down"></i>Mayor a Menor</div>
                    <div className="ToUpper"><i className="fas fa-sort-amount-down-alt"></i>Menor a Mayor</div>
                </button>
            </div>
            <div className="caps-list">
            { props.CapsList.map(e => 
                <div className="ao-cell-caps-container" id={props.identificator + "Cap"+ e.cap} key={e.cap}>
                    <div className="ao-img-cell-caps">
                        <img src={e['cap-cover']} alt={props.name} />
                    </div>
                    <div className="caps-info">
                        <h3 className="ao-title-cell title-caps" title={e.title}>{e['cap-name']}</h3>
                        <p className="capsDate">{e.date}</p>
                    </div>
                    <p className="nCaps">
                        <i className="far fa-play-circle"></i>
                        <span>Cap </span> 
                        {e.cap}
                    </p>
                                    
                    <Link to={props.url + e['cap-url']}></Link>

                    <span className={"ViewContainer" + e.cap + " ViewButton"}>
                        <i className="fas fa-eye" id="Viewed"></i>
                        <i className="fas fa-eye-slash" id="NotViewed"></i>
                        <div className="HoverNotice">
                            Esta función aun no esta disponible.
                        </div>
                    </span>
                </div>
             ) }
             </div>
        </div>
    )
}

export default CapsList;