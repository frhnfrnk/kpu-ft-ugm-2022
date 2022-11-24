import React, { createContext, useState} from 'react'

export const StateContext = createContext()

export const StateProvider = props => {

    const [isCompleted, setIsCompleted] = useState(false)
    const [isCloseVote, setIsCloseVote] = useState(false)
    return (
        <StateContext.Provider value={{
            isCompleted, setIsCompleted,
            isCloseVote, setIsCloseVote
            }}>
            {props.children}
        </StateContext.Provider>
    )


}