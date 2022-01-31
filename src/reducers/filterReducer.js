const initialState = ""

export const newFilter = (newFilter) => {
    return {
        type: "NEW_FILTER",
        data: newFilter
    }
}

const filterReducer = (state = initialState, action) => {
    console.log('prev state: ', state)
    console.log('action', action)

    switch(action.type){
        case "NEW_FILTER":
            console.log('new state: ', action.data)
            return action.data
        default: 
            console.log('new state: ', state);
            return state
    }
}

export default filterReducer