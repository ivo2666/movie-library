import React, { useContext, useEffect } from 'react';
import { UserContext } from './contexts';
import { user as userRequest } from './requests';
import { getCookie } from './requests/config';

const UserAuth = ({children}) => {
    const context = useContext(UserContext);

        useEffect(() => {
            if (!context.user && getCookie('x-auth-token')) {
                userRequest.post({}, '/verify', (user) => {
                        context.logIn(user); 
                    return;
                }, (e) => {
                        console.log(e)
                })    
            }
        }, [context])

    return (
        <>
        {children}
        </>
    )
}

export default UserAuth