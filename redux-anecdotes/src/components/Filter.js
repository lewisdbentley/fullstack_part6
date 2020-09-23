import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../reducers/filterReducer'


const Filter = (props) => {
    const handleChange = (event) => {
        props.changeFilter(event.target.value)
    }

    const style = {
        marginBottom: 20,
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange}></input>
        </div>
    )
}

const mapDispatchToProps = {
    changeFilter
}

export default connect(
    null,
    mapDispatchToProps
)(Filter)