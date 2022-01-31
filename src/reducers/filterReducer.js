const initialState = ""

export const newFilter = (newFilter) => {
    return {
        type: "NEW_FILTER",
        data: newFilter
    }
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case "NEW_FILTER":
            console.log('prev state: ', state)
            console.log('action', action)
            console.log('new state: ', action.data)
            return action.data
        default: 
            return state
    }
}

export default filterReducer