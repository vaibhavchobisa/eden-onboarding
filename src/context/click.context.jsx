import { createContext, useState } from "react";

// as the actual value you want to access
export const ClickContext = createContext({
    isFirstClicked: false,
    setIsFirstClicked: () => { },

    isSecondClicked: false,
    setIsSecondClicked: () => { },

    isThirdClicked: false,
    setIsThirdClicked: () => { },
});

export const ClickProvider = ({ children }) => {
    const [isFirstClicked, setIsFirstClicked] = useState(false);
    const [isSecondClicked, setIsSecondClicked] = useState(false);
    const [isThirdClicked, setIsThirdClicked] = useState(false);
    const value = { isFirstClicked, setIsFirstClicked, isSecondClicked, setIsSecondClicked, isThirdClicked, setIsThirdClicked };

    return (
        <ClickContext.Provider value={value}>
            {children}
        </ClickContext.Provider>
    );
};