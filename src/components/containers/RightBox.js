import classes from "./RightBox.module.css";
import { MainHeader } from "../header&banners/MainHeader";
import { HomeContainer } from "./HomeContainer";
import { useState } from "react";
import { InfoSection } from "./InfoSection";
import {SearchContainer} from "./SearchContainer";

export const RightBox = (props) => {
    const [scrollTop,setScrollTop] = useState(false);

    
    const handleScroll = (event) => {
        if(event.currentTarget.scrollTop >= 100) {
            setScrollTop(true);
        }
        else{
            setScrollTop(false);
        }
    }
    console.log(scrollTop)

    return(<div className={classes['main-right-container']} onScroll={handleScroll}>
        <MainHeader pageState = {props.pageState} scrollTop = {scrollTop}/>
        {props.pageState === "Home" && 
            <HomeContainer/>           
        };
         {props.pageState === "Search" && 
         <SearchContainer/>
         }
       
        <InfoSection/>
    </div>)
}