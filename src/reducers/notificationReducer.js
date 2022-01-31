const initialState = ""

export const showNotification = (content, sort) => {
    if(sort === "vote"){
        return {
            type: "SHOW_NOTIFICATION",
            data: `You voted '${content}'`
        }
    } else {
        return {
            type: "SHOW_NOTIFICATION",
            data: `You created '${content}'`
        }
    }
}

export const clearNotification = () => {
    return {
        type: "CLEAR_NOTIFICATION",
        data: ""
    }
}

const notificationReducer = (state = initialState, action) => {
    console.log('prev state: ', state)
    console.log('action', action)

    switch(action.type){
        case "SHOW_NOTIFICATION":
            console.log('new state: ', action.data)
            return action.data
        case "CLEAR_NOTIFICATION":
            console.log('new state: ', action.data);
            return action.data
        default: 
            console.log('new state: ', state);
            return state
    }
}

export default notificationReducer