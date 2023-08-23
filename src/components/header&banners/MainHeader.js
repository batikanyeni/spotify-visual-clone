import React from "react";
import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";




export const MainHeader = (props) => {

    let navigate = useNavigate();

    const routeChange = () => {
        navigate('/login');
    }

   
    return(
            <div className={`${classes.header} ${props.scrollTop ? classes.scrolled : ""}`}>
                <div className={classes['direction-btn-container']}>
                    <button className={classes['direction-button']}>
                        <img alt="back_button" src="./assets/LeftArrow.svg"/>
                    </button>
                    <button className={classes['direction-button']} >
                        <img  alt="forward_button" src="./assets/RightArrow.svg"/>
                    </button>
                </div>               
                <div className={`${classes['search-container']} ${props.pageState === "Search" ? classes["visible"] : ""}`}>
                    <img alt="search-icon" src="./icons/search_icon.png"/>
                    <input placeholder="What do you want to listen to?"/>
                </div> 
                <div className={classes['anchor-container']}>
                    <a href="/premium" target="_blank">Premium</a>
                    <a href="/support" target="_blank">Support</a>
                    <a href="/download" target="_blank">Download</a>
                </div>    
                <div className={classes['auth-action-container']}>
                    <a  className={classes['sign-up']} href="/sign-up">Sign Up</a>
                    <button onClick={routeChange} className={classes['log-in-btn']}>Log in</button>
                </div>
            </div>       
    );

}