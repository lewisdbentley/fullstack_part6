import anecdoteService from '../services/anecdote'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  console.log('ACTION:', action)
  switch(action.type) {
    case 'INIT_ANECDOTES':
        return action.data
    case 'VOTE':
      const id = action.data.id
      let anecdoteToChange = state.find(anecdote => id === anecdote.id)
      anecdoteToChange = {
        ...anecdoteToChange, votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => {
        return anecdote.id !== id ? anecdote : anecdoteToChange
      })
    case 'NEW':
      return state.concat(action.data)
    default:
      return state
    }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log('inside INIT')
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const submitAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew({content, 'votes': 499})
    dispatch({
      type: 'NEW',
      data: newAnecdote
    })
  }
}

export const submitVote = (id, anecdoteToUpdate) => {
  console.log('id ', id, ' anecdote ', anecdoteToUpdate)
  return async dispatch => {
    const updatedAnecdote = {...anecdoteToUpdate, votes: anecdoteToUpdate.votes + 1}
    await anecdoteService.vote(id, updatedAnecdote)
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }
}


export default reducer