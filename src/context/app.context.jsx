import { createContext, useState } from "react";

// as the actual value you want to access
export const AppContext = createContext({
    isFirstClicked: false,
    setIsFirstClicked: () => { },

    isSecondClicked: false,
    setIsSecondClicked: () => { },

    isThirdClicked: false,
    setIsThirdClicked: () => { },
});

export const AppProvider = ({ children }) => {
    const [isFirstClicked, setIsFirstClicked] = useState(false);
    const [isSecondClicked, setIsSecondClicked] = useState(false);
    const [isThirdClicked, setIsThirdClicked] = useState(false);
    const value = { isFirstClicked, setIsFirstClicked, isSecondClicked, setIsSecondClicked, isThirdClicked, setIsThirdClicked };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};