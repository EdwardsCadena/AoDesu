import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from './Logout';
import ToggleUserVisibility from '../HeaderMovil/index';

export const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Cargando...</div>
    }

    return (
        isAuthenticated && (
            <div className="profile-container">
                <button onClick={ToggleUserVisibility} class="close-profile-btn">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <div className="profile-img">
                    <img src={user.picture} alt={user.name} />
                </div>
                <div className="profile-info">
                    <p className="beta-advisory">BETA</p>
                    <div className="profile-name">
                    <div className="icon">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="txt">
                        {user.name}
                    </div>
                </div>
                <div className="profile-email">
                    <div className="icon">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="txt">
                        {user.email}
                    </div>
                </div>
                <div className="profile-btn">
                    <LogoutButton />
                </div>
                </div>
            </div>
        )
    )
}