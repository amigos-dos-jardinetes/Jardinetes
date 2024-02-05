import React, {useState} from 'react';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth'
import { useAuth } from '../../authContext'


const Login = () => {
    const { userLoggedIn } = useAuth();

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isSigningIn, setIsSignIn] = useState(false);
    const[errorMessage, setErrorMassage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefalt()
        if(!isSigningIn) {
            setIsSignIn(true);
            await doSignInWithEmailAndPassword(email, password);
        }
    }

    const onGoogleSignIn = (e) => {
        e.preventDefalt()
        if(!isSigningIn) {
            setIsSignIn(true);
            doSignInWithGoogle().catch(err => {
                setIsSignIn(false)
            })
        }
    }
    
    return (
        <div>
            {userLoggedIn && (<Navigate to ={'/Menu'} replace={true}/>)}
        </div>
    )
}