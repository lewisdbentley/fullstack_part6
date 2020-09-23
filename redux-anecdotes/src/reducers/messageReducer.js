const messageReducer = (state = 'first message', action) => {
    switch(action.type) {
        case 'NEW_MESSAGE':
            return action.data
        default:
            return state
    }
}

export const setMessage = (message, timer) => {
    return async dispatch => {
        if(timer) {
            setTimeout(() => {
                dispatch(setMessage(''))
            }, timer*1000)
        }
        dispatch({
            type: 'NEW_MESSAGE',
            data: message
        })
    }
}

export default messageReducer