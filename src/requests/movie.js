import { server, headers } from './config'

const movie = {
    get: async (query, cb) => {
        try {
            const response = await fetch(`${server}/movies${query}`);
            const body = await response.json();
            cb(body);
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }

    },

    getOne: async (id, cb) => {
        try {
            const response = await fetch(`${server}/movies/${id}`);
            const body = await response.json();
            cb(body);
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    addToFav: async (id, user, cb) => {
        try {
            const response = await fetch(`${server}/movies/addToFav`, {
                method: "POST",
                headers,
                body: JSON.stringify({ id, user })
            });
            if (response.status < 400) {
                cb(true)
            }else{
                cb(false)
            }
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    },

    removeFromFav: async (id, user, cb) => {
        try {
          const response = await fetch(`${server}/movies/removeFromFav`, {
              method: "POST",
              headers,
              body: JSON.stringify({ id, user })
          })
          if (response.status < 400) {
            cb(false)
        }else{
            cb(true)
        }  
        } catch (err) {
            console.log(err)
            throw new Error('Something wrong!')
        }
    }
}

export default movie