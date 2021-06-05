import { server, headers } from './config'

const rating = {
    put: async (update, id, com,  cb) => {
        try {
            const response = await fetch(`${server}/rating/${id}`, {
                method: "PUT",
                headers,
                body: JSON.stringify({ rating: update })
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
            const response = await fetch(`${server}/rating/${id}`, {
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

    post: async (rating ,movieId, username, cb) => {
        try {
            const response = await fetch(`${server}/rating/`, {
                method: "POST",
                headers,
                body: JSON.stringify({rating, movieId, username, cb})
            });
            const body = response.json()

            cb(body.rating)
            
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    remove: async (id) => {
        try {
            const response = await fetch(`${server}/rating/${id}`, {
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

export default rating