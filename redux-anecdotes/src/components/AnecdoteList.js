import React from 'react'
import Filter from '../components/Filter'
import { connect } from 'react-redux'
import { submitVote } from '../reducers/anecdoteReducer'
import { setMessage } from '../reducers/messageReducer'


const AnecdoteList = (props) => {
    // const anecdotes = useSelector(state => state.anecdotes)
    // const filter = useSelector(state => state.filter)
    // const sortedAnecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
    const sortedAnecdotes = props.anecdotes.filter(anecdote => anecdote.content.includes(props.filter))
    // const dispatch = useDispatch()
  
    // const vote = (id) => {
    //     console.log('vote', id)
    //     message(`${anecdoteToUpdate.content.substring(0, 14).concat('...')} got your vote!`)
    //     dispatch(submitVote(id, anecdoteToUpdate))
    // }

    const anecdoteToUpdate = (id) => {
        return props.anecdotes.find(anecdote => anecdote.id === id)
    }

    return (
        <div>
            < Filter />
            {sortedAnecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => 
                            props.submitVote(anecdote.id, anecdoteToUpdate(anecdote.id)) &&
                            props.setMessage('voted', 5)}>vote
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchfromProps = {
    submitVote,
    setMessage
}

export default connect(
    mapStateToProps,
    mapDispatchfromProps
)(AnecdoteList)