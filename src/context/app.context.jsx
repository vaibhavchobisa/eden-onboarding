import { createContext, useState } from "react";

export const defaultFormFields = {
    fullName: '',
    displayName: ''
};

// as the actual value you want to access
export const AppContext = createContext({
    isFirstClicked: false,
    setIsFirstClicked: () => { },

    isSecondClicked: false,
    setIsSecondClicked: () => { },

    isThirdClicked: false,
    setIsThirdClicked: () => { },

    formFields: {},
    setFormFields: () => { },
});

export const AppProvider = ({ children }) => {
    const [isFirstClicked, setIsFirstClicked] = useState(false);
    const [isSecondClicked, setIsSecondClicked] = useState(false);
    const [isThirdClicked, setIsThirdClicked] = useState(false);

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { fullName, displayName } = formFields;

    const value = {
        isFirstClicked,
        setIsFirstClicked,
        isSecondClicked,
        setIsSecondClicked,
        isThirdClicked,
        setIsThirdClicked,
        fullName,
        displayName,
        setFormFields
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};