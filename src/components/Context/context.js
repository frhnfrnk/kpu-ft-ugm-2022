import React, { createContext, useState} from 'react'

export const StateContext = createContext()

export const StateProvider = props => {

    const [isCompleted, setIsCompleted] = useState(false)
    const [isCloseVote, setIsCloseVote] = useState(false)
    const [profile, setProfile] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const [isChoose, setIsChoose] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false)
    const [isDPT, setIsDPT] = useState(false)
    const clientId = '449519521276-2959vrk76er8jcqobo5pjn7q2plvh7ih.apps.googleusercontent.com'

    return (
        <StateContext.Provider value={{
            isCompleted, setIsCompleted,
            isCloseVote, setIsCloseVote,
            profile, setProfile,
            clientId,
            isLogin, setIsLogin,
            isChoose, setIsChoose,
            isRegistered, setIsRegistered,
            isDPT, setIsDPT
            }}>
            {props.children}
        </StateContext.Provider>
    )


}