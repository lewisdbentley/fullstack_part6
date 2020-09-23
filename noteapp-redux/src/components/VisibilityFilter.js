import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'


const VisibilityFilter = () => {
    const dispatch = useDispatch()

    return (
        <div>
            all
            <input 
                type='radio' 
                name='filter' 
                onChange={() => dispatch(filterChange('ALL'))}
            />
            important
            <input 
                type='radio' 
                name='filter' 
                onChange={() => dispatch(filterChange('IMPORTANT'))}
            />
            unimportant
            <input 
                type='radio' 
                name='filter' 
                onChange={() => dispatch(filterChange('UNIMPORTANT'))}
            />
        </div>
    )
}

export default VisibilityFilter 