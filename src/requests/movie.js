import { server } from './config'

const movie = {
    get: async (query,cb) => {
        const response = await fetch(`${server}/movies${query}`);
        const body = await response.json();
        cb(body);

    }
}

export default movie