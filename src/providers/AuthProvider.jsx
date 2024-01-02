import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'
import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{

            const userEmail = currentUser?.email  || user?.email;
            const loggedUser = {email: userEmail}
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
            if(currentUser){                
                axios.post('http://localhost:5000/jwt', loggedUser, {withCredentials:true})
                .then(res=> {
                    console.log('token response', res.data)
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser, {withCredentials: true})
                .then(res=> console.log(res.data))
            }
        })

        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;