import { server, headers } from './config'

const comentar = {
    put: async (update, id, com,  cb) => {
        try {
            const response = await fetch(`${server}/comentars/${id}`, {
                method: "PUT",
                headers,
                body: JSON.stringify({ comentar: update })
            });
            const body = await response.json()

            cb({...com, body})
            
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    get: async (id, username, cb) => {
        try {
            headers.username = username;
            const response = await fetch(`${server}/comentars/${id}`, {
                method: "GET",
                headers
            });
            const body = await response.json();
            cb(body);
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    post: async (comentar ,movieId, username, com, cb) => {
        try {
            const response = await fetch(`${server}/comentars/`, {
                method: "POST",
                headers,
                body: JSON.stringify({comentar, movieId, username, com, cb})
            });
            const body = await response.json()
            cb({...com, ...body })
            
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    remove: async (id) => {
        try {
            const response = await fetch(`${server}/comentars/${id}`, {
                method: "DELETE",
                headers
            });
            const body = await response.json()
            return body
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    }
}

export default comentar