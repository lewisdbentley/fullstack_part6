import React from 'react'
import { connect } from 'react-redux'
import { submitAnecdote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'


const AnecdoteForm = (props) => {
    
    const newAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.submitAnecdote(content)
        props.setMessage(`posted ${content.substring(0, 14).concat('...')} thanks for sharing!`, 2)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={newAnecdote}> 
                <input name='anecdote'/>
                <button type='submit'>add</button>
            </form>
        </div>
    )
}

const mapDispatchfromProps = {
    submitAnecdote, setMessage
}

export default connect(
    null,
    mapDispatchfromProps
)(AnecdoteForm)