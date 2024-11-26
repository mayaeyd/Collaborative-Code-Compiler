import { createContext, useState } from "react";

export const emailContext = createContext();
const EmailProvider = ({ children }) => {
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e)=>{
        setEmail(e.target.value);
    }

    return(
        <emailContext.Provider value={{ role, setRole, email, handleChange}}>
            {children}
        </emailContext.Provider>
    );
};

export default EmailProvider;