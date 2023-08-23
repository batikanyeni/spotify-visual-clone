import { useNavigate } from 'react-router-dom';
import classes from './SignupHeader.module.css';

export const SignupHeader = () => {

    let navigate = useNavigate();

    const changePage = () =>{
        navigate('/');
    }


    return(<div className={classes['sign-up-header']}>
    <img onClick={changePage} alt='spotify-logo' src='./icons/spotify-logo-white-bg.png'/>
</div>)
}