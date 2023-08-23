import { createContext, useState } from "react";

export const GlobalState = createContext()

export  const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false)


    const onOpen = () => {
        setModal(!modal)
    }

    const state = {
        authModal: {
            modal,
            setModal
        },
        onOpen
    }
  return (
    <GlobalState.Provider value={state}>{children}</GlobalState.Provider>
  )
}
