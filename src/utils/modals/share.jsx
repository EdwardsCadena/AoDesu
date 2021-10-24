import React from 'react';

export function ShowShareModal(){
    const content = document.querySelector('.content');

    content.classList.toggle('modalShare');
}

function ShareModal(props){
    return(
        <div className="modal-share-container">
            <div className="modal-clicker" onClick={ShowShareModal}></div>
            <div className="modal-content">
                <h3>
                    Compartir
                    <i className="fas fa-times" onClick={ShowShareModal}></i>
                </h3>
                <div className="share-buttons">
                    <ul>
                        <li>
                            <a target="newTab" href={"https://www.facebook.com/sharer/sharer.php?u=https://aodesuapp.herokuapp.com" + props.url}>
                                <i className="fab fa-facebook-f"></i>
                                <div className="share-branch">Facebook</div>
                            </a>
                        </li>
                        <li>
                            <a target="newTab" href={"https://twitter.com/intent/tweet?url=https://aodesuapp.herokuapp.com" + props.url + "&hashtags=anime"}>
                                <i className="fab fa-twitter"></i>
                                <div className="share-branch">Twitter</div>
                            </a>
                        </li>
                        <li>
                            <a target="newTab" href={"https://api.whatsapp.com/send?text=https://aodesuapp.herokuapp.com" + props.url}>
                                <i className="fab fa-whatsapp"></i>
                                <div className="share-branch">WhatsApp</div>
                            </a>
                        </li>
                        <li>
                            <a target="newTab" href={"https://www.linkedin.com/sharing/share-offsite/?url=https://aodesu.herokuapp.com" + props.url}>
                                <i className="fab fa-linkedin-in"></i>
                                <div className="share-branch">LinkedIn</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ShareModal;