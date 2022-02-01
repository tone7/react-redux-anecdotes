const initialState = ""

export const setNotification = (notification, time, timerId) => {
    return async dispatch => {
        if(timerId !== null){
            clearTimeout(timerId)
        }
        const newTimerId = setTimeout(() => {
            dispatch(clearNotification())
        }, (time * 1000))
        dispatch({
            type: "SET_TIMER_ID",
            data: newTimerId
        })
        dispatch({
            type: "SET_NOTIFICATION",
            data: notification
        })
    }
}

export const clearNotification = () => {
    return {
        type: "CLEAR_NOTIFICATION",
        data: ""
    }
}

const notificationReducer = (state = initialState, action) => {
    switch(action.type){
        case "SET_NOTIFICATION":
            console.log('prev state: ', state)
            console.log('action', action)
            console.log('new state: ', action.data)
            return action.data
        case "CLEAR_NOTIFICATION":
            console.log('prev state: ', state)
            console.log('action', action)
            console.log('new state: ', action.data);
            return action.data
        default: 
            return state
    }
}

export default notificationReducer