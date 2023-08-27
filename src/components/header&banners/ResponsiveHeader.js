import { useState } from 'react';
import React from 'react';
import classes from './ResponsiveHeader.module.css'
import { useNavigate } from 'react-router-dom';
export const ResponsiveHeader = (props) => {

    const [hamActive, setHamActive] = useState(false);
    const navigate = useNavigate(); 

    const handleHam = () => {
        setHamActive( state => !state)
    }

    const pageChange = () =>{
        navigate('/')
    }




    return (<React.Fragment><div className={classes['responsive-header']}>
        <img onClick={pageChange} alt='spotify_logo' src='./icons/spotify-logo-1.png'/>
        <div className={classes['nav-container']}>
            <nav className={classes['page-nav-container']}>
                <a href='/premium'>Premium</a>
                <a href='/support'>Support</a>
                <a href='/download'>Download</a>
            </nav>
            <nav className={classes['auth-nav-container']}> 
                <a href='/sign-up'>Sign up</a>
                <a href='/login'> Login</a>
            </nav>
            </div>
        </div>
        <button  value = {hamActive} onClick={handleHam} className={`${classes['hamburger']} ${hamActive ? classes['active'] : ""}`}>
                <div className={classes['bar']}></div>
        </button>
        <div className={classes['hamburger-slider']}>
            <div onClick={handleHam} className={`${classes['mobile-nav-background']} ${hamActive ? classes['active']: ""}`}/>
            <div className = {`${classes['mobile-nav-holder']} ${hamActive? classes['active']: ""} `}>
                <nav className={classes['mobile-page-nav']}>
                    <li><a href='/premium'>Premium</a></li>
                    <li><a href='/support'>Support</a></li>
                    <li><a href='/download'>Download</a></li> 
                </nav>
                <hr className={classes['slider-hr']}/>
                <nav className={classes['mobile-auth-nav']}> 
                    <li><a href='/sign-up'>Sign up</a></li> 
                    <li><a href='/login'> Login</a></li>
                </nav>
                <img className={classes['slider-logo']} alt='spotify-logo' src='./icons/spotify-logo-1.png'/>
            </div>
        </div>
    </React.Fragment>)
}