import React from "react";
import { useState } from "react";
import { LeftBox } from "../containers/LeftBox";
import { RightBox } from "../containers/RightBox";
import classes from "./MainPage.module.css"
import { BottomBanner } from "../header&banners/BottomBanner";
export const MainPage = () => {
   const[pageState,setPageState] = useState('Home'); 
    return (
        <div className={classes['main-page']}>
            <LeftBox setPageState= {setPageState}/>
            <RightBox pageState = {pageState}/>
            <BottomBanner/>
        </div>
    );
}