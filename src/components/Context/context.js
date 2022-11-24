import React, { createContext, useState} from 'react'

export const StateContext = createContext()

export const StateProvider = props => {

    const [isCompleted, setIsCompleted] = useState(false)
    return (
        <StateContext.Provider value={{
            isCompleted, setIsCompleted
            }}>
            {props.children}
        </StateContext.Provider>
    )


}