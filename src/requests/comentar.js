import { server, headers } from './config'

const comentar = {
    put: async (update, id, com,  cb) => {
        try {
            const response = await fetch(`${server}/comentars/${id}`, {
                method: "PUT",
                headers,
                body: JSON.stringify({ comentar: update })
            });
            const body = response.json()

            cb({...com, body})
            
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    get: async (id, username, cb) => {
        try {
            const response = await fetch(`${server}/comentars/${id}`, {
                method: "POST",
                headers,
                body: JSON.stringify({username})
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
            const body = response.json()

            cb({...com, body})
            
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
            const body = response.json()
            return body
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    }
}

export default comentar