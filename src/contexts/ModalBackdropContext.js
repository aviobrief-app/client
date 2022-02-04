import React, { useContext, useState } from 'react';

const ModalBackdropContext = React.createContext();

export const useModalBackdropContext = () => useContext(ModalBackdropContext);


export const ModalBackdropContextProvider = ({ children }) => {

    const [contextDisplayModal, contextSetDisplayModal] = useState(false);

    const globalInfo = {
        contextDisplayModal,
        contextSetDisplayModal,
    };

    return (
        <ModalBackdropContext.Provider value={globalInfo}>
            {children}
        </ModalBackdropContext.Provider>
    );

}





export default ModalBackdropContext;

