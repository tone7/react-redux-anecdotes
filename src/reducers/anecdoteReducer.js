export const voteAnecdote = (anecdote) => {
  return {
    type: "VOTE_ANECDOTE",
    data: {
      ...anecdote
    }
  }
}

export const createAnecdote = (anecdote) => {
  return {
    type: "NEW_ANECDOTE",
    data: anecdote
  }
}

export const changeFilter = (newFilter) => {
  return {
    type: "CHANGE_FILTER",
    data: newFilter
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: "INIT_ANECDOTES",
    data: anecdotes
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('prev state: ', state)
  console.log('action', action)
  let newState

  switch(action.type){
    case "INIT_ANECDOTES":
      console.log('new state: ', action.data);
      return action.data
    case "VOTE_ANECDOTE":
      const id = action.data.id
      const anecdoteToVote = state.find(anecdote => anecdote.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }

      newState = state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
      console.log('new state: ', newState); 
      return newState
    case "NEW_ANECDOTE":
      if(action.data.content === ""){
        console.log('new state: ', state);
        return state
      }

      newState = [...state, action.data]
      console.log('new state: ', newState);
      return [...state, action.data]
    case "CHANGE_FILTER":
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
      console.log('new state: ', state);
      return state
  }
}

export default anecdoteReducer