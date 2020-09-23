import React from 'react'
import { toggleImportanceOf } from '../reducers/noteReducer'
import { connect } from 'react-redux'


const Note = ({note, clickHandler}) => {
    return (
        <li key={note.id}>
            {note.content}
            <strong>
                <button
                    onClick={() => clickHandler(note.id)}>
                    {note.important ? 'unimportant' : 'important'}
                </button>
            </strong>
        </li>
    )
}

const Notes = (props) => {
    return (
        <ul>
            {props.notes.map(note => 
                 < Note  
                    key={note.id}
                    note={note}
                    clickHandler={() => 
                        props.toggleImportanceOf(note.id)
                    }
                />
            )}
        </ul>
    )
}


const mapStateToProps = (state) => {
    if ( state.filter === 'ALL' ) {
        return {
        notes: state.notes
        }
    }
    return {
        notes: (state.filter  === 'IMPORTANT' 
        ? state.notes.filter(note => note.important)
        : state.notes.filter(note => !note.important)
        )
    }
}

const mapDispatchToProps = {
    toggleImportanceOf
}

const ConnectedNotes = connect(mapStateToProps, mapDispatchToProps)(Notes)
export default ConnectedNotes