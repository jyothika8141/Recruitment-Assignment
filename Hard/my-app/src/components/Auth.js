import {auth, provider } from "../firebase-config.js";
import {signInWithPopup} from "firebase/auth";

import Cookies from 'universal-cookie';
const cookies = new Cookies()

export const Auth = () =>{

    const signInWithGoogle = async () => {
        try{
            console.log("siigning in with google")
            const result = await signInWithPopup(auth, provider); 
            console.log(result);
            cookies.set("auth-token", result.user.refreshToken);
        } catch(err) {
            console.error(err);
        }
    }


    return (
        <div className="auth">
            <p> Sign in with google </p>
            <button onClick={signInWithGoogle}> Sign in with Google </button>
        </div>
    );      
};