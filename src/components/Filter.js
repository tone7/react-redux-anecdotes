import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newFilter } from '../reducers/filterReducer'
import { changeFilter } from '../reducers/anecdoteReducer'

const Filter = () => {
    const filter = useSelector(state => state.filter)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(newFilter(event.target.value))
        dispatch(changeFilter(event.target.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        filter <input onChange={handleChange} value={filter}/>
        </div>
    )
}

export default Filter