import { useNavigate } from 'react-router-dom';
import classes from './LoginHeader.module.css';


export const LoginHeader = () => {

    let navigate = useNavigate();

    const changePage = () =>{
        navigate('/');
    }

    return(<div className={classes['log-in-header']}>
            <img onClick={changePage} alt='spotify-logo' src='./icons/spotify-logo-1.png'/>
    </div>)
}