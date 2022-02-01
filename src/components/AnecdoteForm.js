import React from "react";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { connect } from "react-redux";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ""
        props.createAnecdote(content)
        props.setNotification(`You created '${content}'`, 5, props.timerId)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        timerId: state.timerId
    }
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)