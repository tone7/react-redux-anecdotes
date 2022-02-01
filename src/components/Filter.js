import React from 'react'
import { connect } from 'react-redux'
import { newFilter } from '../reducers/filterReducer'
import { changeFilter } from '../reducers/anecdoteReducer'

const Filter = (props) => {

    const handleChange = (event) => {
        props.newFilter(event.target.value)
        props.changeFilter(event.target.value)
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        filter <input onChange={handleChange} value={props.filter}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    newFilter,
    changeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)