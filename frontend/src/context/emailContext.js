import { createContext, useState } from "react";

export const emailContext = createContext();
const EmailProvider = ({ children }) => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');


    return(
        <emailContext.Provider value={{ role, setRole, email, setEmail}}>
            {children}
        </emailContext.Provider>
    );
};

export default EmailProvider;