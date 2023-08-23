import classes from './SignUpPage.module.css';
import { SignupHeader } from '../header&banners/SignupHeader';
import { Signup } from '../containers/Signup';

export const SignUpPage = () =>{

    return(<div className={classes['sign-up-page']}>
        <SignupHeader/>
        <Signup/>
    </div>)
}