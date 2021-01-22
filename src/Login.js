import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }));
        })
        .catch((error) => {
            alert(error)
        })
    };

    const register = e => {
        e.preventDefault()
        if(!name){
            return alert("Please Enter Full Name");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic,
                }));
            })
        })
        .catch((error) => {
            alert(error.message)
        })
    };


    return (
        <div className="login">
            <img src="https://cedat.mak.ac.ug/wp-content/uploads/2018/07/cropped-mak-logo-retina-1.png" alt="GraspApp Logo" />

            <form>
                <input value={name} onChange={e=> setName(e.target.value)} placeholder="Full name (required if registering)" type="text" />
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder="profile Pic URL (optional)" type="text" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a GraspApp member?{" "}</p>
            <span className="login__register" onClick={ register }>Register Now</span>       
        </div>
    )
}

export default Login;
