import anecdoteService from '../services/anecdotes'

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.vote(anecdote) 
    console.log("updated: ", updatedAnecdote);
    dispatch({
      type: "VOTE_ANECDOTE",
      data: {
        ...updatedAnecdote
      }
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "NEW_ANECDOTE",
      data: newAnecdote
    })
  }
}

export const changeFilter = (newFilter) => {
  return {
    type: "CHANGE_FILTER",
    data: newFilter
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    })
  }
}

const anecdoteReducer = (state = [], action) => {
  let newState

  switch(action.type){
    case "INIT_ANECDOTES":
      console.log('prev state: ', state)
      console.log('action', action)
      console.log('new state: ', action.data);
      return action.data
    case "VOTE_ANECDOTE":
      console.log('prev state: ', state)
      console.log('action', action)
      const id = action.data.id

      newState = state.map(anecdote => anecdote.id !== id ? anecdote : action.data)
      console.log('new state: ', newState); 
      return newState
    case "NEW_ANECDOTE":
      console.log('prev state: ', state)
      console.log('action', action)
      if(action.data.content === ""){
        console.log('new state: ', state);
        return state
      }

      newState = [...state, action.data]
      console.log('new state: ', newState);
      return [...state, action.data]
    case "CHANGE_FILTER":
      console.log('prev state: ', state)
      console.log('action', action)
      newState = [...state]
      for(const anecdote of newState){
        if(anecdote.content.includes(action.data)){
            anecdote.show = true
        } else {
            anecdote.show = false
        }
      }
      console.log('new state: ', newState);
      return newState
    default: 
      return state
  }
}

export default anecdoteReducer