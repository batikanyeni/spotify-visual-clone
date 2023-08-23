import { useState } from 'react';
import classes from './Signup.module.css';


export const Signup = () => {

    const [userEmail,setUserEmail] = useState('');
    const [password,setPassword] = useState('');
    const [profileName,setProifleName] = useState('');
    const [seePassword,setSeePassword] = useState(false);
    const [agreed, setAgreed] = useState(false);

    const handlePasswordVisibility = () =>{
        setSeePassword((state) => !state);
    }


    return(<div className= {classes['sign-up-container']}>
            <h1>Sign up for free to start listening.</h1>
            <div className={classes['sign-up-options']}>
                <button className={classes['f-btn']}><img alt='facebook-ico' src='./icons/f-white-bg.png'/> <span>Sign up with Facebook</span></button>
                <button className={classes['g-btn']}><img alt='google-ico' src='./icons/g-white-bg.png'/> <span>Sign Up with Google</span></button>
            </div>
            <div className={classes['seperator']}><span>or</span></div>
            <h2>Sign up with your e-mail adress</h2>
            <form className={classes['sign-up-form']}>
                <label> 
                    <p>What is your e-mail adress? </p>
                    <div className={classes['input-container']}>
                        <input type='email' value={userEmail}  onChange={e => setUserEmail(e.target.value)} required placeholder='Enter your e-mail adress'/>
                    </div>
                </label>
                <label> 
                    <p>Create password</p>
                    <div className={classes['input-container']}>
                        <input type= {seePassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}  required placeholder='Create password.'/>
                        <img onClick={handlePasswordVisibility} alt='see-img' src={seePassword ? './icons/see-white-bg.png' : './icons/no-see-white-bg.png'}/>
                    </div>
                </label>
                <label> 
                    <p>What name should we call you by?</p>
                    <div className={classes['input-container']}>
                        <input type='text' value={profileName}  onChange={e => setProifleName(e.target.value)} required placeholder='Enter profile name.'/>
                    </div>
                </label>
                <p className={classes['p1']}>It appears in your profile</p>
                <p className={classes['p2']}>What is your date of birth?</p>
                <div className={classes['date-container']}>
                    <label> 
                        <p>Month </p>
                        <div className={classes['month-selector']}>
                            <select placeholder='Month' name='months'>
                                <option value='january'>January</option>
                                <option value='february'>February</option>
                                <option value='march'>March</option>
                                <option value='april'>April</option>
                                <option value='may'>May</option>
                                <option value='june'>June</option>
                                <option value='july'>July</option>
                                <option value='august'>August</option>
                                <option value='september'>September</option>
                                <option value='october'>October</option>
                                <option value='november'>November</option>
                                <option value='december'>December</option>
                            </select>
                        </div>
                    </label>
                    <label className={classes['day-label']}> 
                        <p>Day</p>
                        <div className={classes['day-input']}>
                            <input type='text'  required placeholder='DD' maxLength={2}/>
                        </div>
                    </label>
                    <label className={classes['year-label']}> 
                        <p>Year</p>
                        <div className={classes['year-input']}>
                            <input type='text'  required placeholder='YYYY' maxLength={4}/>
                        </div>
                    </label>
                </div>
                <p className={classes['p3']}>What is your gender?</p>
                <div className={classes['radio-container']}>
                    <input type="radio" id="male" name="gender" value="male"/>
                    <label for="male">Male</label><br/>
                    <input type="radio" id="woman" name="gender" value="woman"/>
                    <label for="woman">Woman</label><br/>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other">Other</label>
                    <div className={classes['unkown-gender']}>
                        <input type="radio" id="no-info" name="gender" value="no-info"/>
                        <label for="no-info">I prefer not to specify</label>
                    </div>
                </div>
                <div className={classes['agreement-container']}>
                    <input onClick={() => setAgreed(state => !state)} type="checkbox" id="agree" name="agree" value={agreed}/>
                    <label for = 'agree'>Share my registration data with Spotify's content providers for marketing purposes.</label>  
                </div>
                <div className={classes['terms-and-condition']}>
                    <p className={classes['tp-1']} >By clicking Sign Up, you agree to Spotify's<a href='/'> Terms and Conditions of Use .</a></p>
                    <p className={classes['tp-2']} >To learn more about how Spotify collects, uses, shares and protects your personal data, please read the<a href='/'> Spotify Privacy Policy .</a></p>  
                </div>
                <button type='submit' className={classes['register-btn']}>Register</button>
                <p className={classes['p4']} >Do you have an account?<a href='/login'> Sign in  </a>.</p>

            </form>

    </div>)
}