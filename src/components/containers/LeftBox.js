import React from "react"
import { TopBox } from "./TopBox"
import { BottomBox } from "./BottomBox"
import classes from './LeftBox.module.css'

export const LeftBox = (props) => {

    return <div className= {classes['container']} >
        <TopBox  setPageState = {props.setPageState}/>
        <BottomBox/>
    </div>
}