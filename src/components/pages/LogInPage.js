import classes from './LogInPage.module.css';
import { LoginHeader } from '../header&banners/LoginHeader';
import { LogIn } from '../containers/LogIn';
export const LogInPage = () =>{



    return <div className={classes['log-in-page']}>
            <LoginHeader/>
            <LogIn/>

    
        </div>
}