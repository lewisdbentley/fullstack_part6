const filterReducer = (state='ALL', action) => {
    console.log('ACTION', action)
    switch(action.type) {
        case 'TOGGLE_FILTER':
            return action.filter
        default:
            return state
    }
}

export const filterChange = filter => {
    return {
        type: 'TOGGLE_FILTER',
        filter

    }
}

export default filterReducer