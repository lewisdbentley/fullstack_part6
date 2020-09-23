import axios from 'axios'


const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log('response.data', response.data)
    return response.data
}

const createNew = async (object) => {
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (id , newObject )=> {
    const response = await axios.put(`${baseUrl}/${id}`, newObject)
    return response.data
}

const sabertooth = 'roar'

export default { getAll, sabertooth, createNew, vote }