import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config';

export const Authcontext = createContext();

export const useAuth = () => useContext(Authcontext);

export default function Authprovider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [results, setResults] = useState(null)
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user)
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }
            setIsloading(false)
        });
    }, [])

    return (
        <Authcontext.Provider value={{ currentUser, isAuthenticated, setIsAuthenticated, isLoading, setIsloading, results, setResults }}>
            {children}
        </Authcontext.Provider>
    )

} 
