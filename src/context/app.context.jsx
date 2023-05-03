import { createContext, useState } from "react";

export const defaultFormFields = {
    fullName: '',
    displayName: '',
};

// as the actual value you want to access
export const AppContext = createContext({
    formFields: {},
    setFormFields: () => { },
});

export const AppProvider = ({ children }) => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { fullName, displayName } = formFields;

    const value = {
        fullName,
        displayName,
        formFields,
        setFormFields
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};