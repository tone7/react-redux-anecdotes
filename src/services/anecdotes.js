import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = { content, votes: 0, show: true }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const vote = async (anecdote) => {
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
    }

    const anecdoteUrl = `${baseUrl}/${anecdote.id}`

    const response = await axios.put(anecdoteUrl, updatedAnecdote)
    return response.data
}

export default { getAll, createNew, vote }