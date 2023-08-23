import React from "react";
import classes from "./TopBox.module.css"


export const TopBox = (props) => {

    const home_click = () =>{
        props.setPageState("Home");
    }

    const search_click = () => {
        props.setPageState("Search");
    }

    return(<div className= {classes['container']}>
        <button onClick={home_click} className={classes['home_button']}>
            <img alt="home_icon" src="/icons/home_icon_2.png"  className= {classes['grey-filtered']}/>
            <span>Home</span>
        </button>
        <button onClick={search_click} className={classes['search_button']}>
            <img alt="search_icon" src="/icons/search_icon.png" className= {classes['grey-filtered']}/>
            <span>Search</span>
        </button>
        

    </div>)
}