import React, { useContext, useState } from "react";
import "./modal.css";
import { GlobalState } from "./ModalContext";

const Modal = () => {
    const state = useContext(GlobalState);
    const { modal, setModal } = state.authModal;


console.log(state.onOpen,modal);
   

    return (
        <>
            <div className={modal ? `modal` : ""}>
                <div className={modal ? `modalBox` : ""}>
                
                    dfgdfg
                    <button onClick={  state.onOpen}>&times;</button>
                </div>
            </div>
        </>
    );
};

export default Modal;
