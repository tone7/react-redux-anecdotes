export const setTimerId = (id) => {
    return {
        type: "SET_TIMER_ID",
        data: id
    }
}

const timerReducer = (state = null, action) => {
    switch(action.type){
        case "SET_TIMER_ID":
            console.log('prev state: ', state)
            console.log('action', action)
            console.log('new state: ', action.data)
            return action.data
        default: 
            return state
    }
}

export default timerReducer