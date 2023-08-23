import { useState } from 'react';
import classes from './LogIn.module.css';

export const LogIn = () =>{
    const [seePassword,setSeePassword] = useState(false);
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const handlePasswordVisibility = () =>{
        setSeePassword((state) => !state);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log('submitted!');
    }
    console.log(userName);

    return (<div className={classes['login-container']}>
        <h1>Log in to Spotify</h1> 
        <div className={classes['log-options']}>
            <button><img alt='google-icon' src='./icons/g_img.png'/><span>Continue with Google</span></button>
            <button><img alt='facebook-icon' src='./icons/f-img.png'/><span>Continue with Facebook</span></button>
            <button><img alt='apple-icon' src='./icons/a-img.png'/><span>Continue with Apple</span></button>
        </div>
        <hr/>
        <form onSubmit={handleSubmit} className={classes['login-form']}>
            <label> 
                <p>Email or username </p>
                <div className={classes['input-container']}>
                    <input type='text' value={userName}  onChange={e => setUserName(e.target.value)} required placeholder='Email or Username'/>
                </div>
            </label>
            <label> 
                <p>Password</p>
                <div className={classes['input-container']}>
                    <input type= {seePassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}  required placeholder='Password'/>
                    <img onClick={handlePasswordVisibility} alt='see-img' src={seePassword ? './icons/see.png' : './icons/no-see.png'}/>
                </div>
            </label>
            <div className={classes["hell"]}>
                <label className={classes['switch']}>         
                    <input type="checkbox"/>
                    <span className={classes['slider']}/> 
                </label>
                <span className={classes['text-span']}>Remember&nbsp;me</span>
            </div>
            <div className={classes['btn-container']}>
                <br/>
                <button type='submit' className={classes['login-btn']}>Log In</button>
                <br/>
                <a href='/'>Forgot Your Password?</a>
            </div> 
        </form>
        <hr/>
        <div className={classes['bottom-container']}>
            <span>Don't have an account?</span> 
            <a href='/sign-up'>Sign up for Spotify.</a>
        </div>
    </div>)
}