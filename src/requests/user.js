import { server, headers } from './config'

const user = {
    register: async (data, onSuccess, onFailure) => {
        try {
        const response = await fetch(
            `${server}/users/register`,{
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            })
            const authToken = response.headers.get("Authorization");
            if (authToken !== null) {
              document.cookie = `x-auth-token=${authToken}`
            }
      
            
      
            if (response.status === 302) {
                throw new Error('Username exist');
            }else if (response.status === 204) {
              throw new Error('Username or Password is wrong!');
            }else if (response.status === 401) {
              
              throw new Error('token is expire')
            }
      
            const body = await response.json()
            
        
            if (body.username) {
                onSuccess({
                username: body.username,
                id: body._id,
                favorites: body.favorites
              });
            } else {
              onFailure()
            }
          } catch(e) {
            onFailure(e)
          }

    }
}

export default user