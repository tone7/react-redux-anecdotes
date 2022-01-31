import React from "react";
import { useDispatch, useSelector } from "react-redux";
import compare from "../utils/compare";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    return (
        <div>
            {anecdotes.sort(compare).map(anecdote => 
                anecdote.show &&
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => {
                                dispatch(voteAnecdote(anecdote))
                                dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
                            }}>vote</button>
                        </div>
                    </div>
        )}
        </div>
    )
}

export default AnecdoteList