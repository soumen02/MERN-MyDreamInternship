import React from 'react';
import "./SeeAll.css";
import EditBox from './EditBox';
import NoteBox from './NoteBox';

export default function SeeAll({items, state, edit, arr}) {
    const [divAll, setDivAll] = React.useState(false);
    const handleClick = () => {
        setDivAll(!divAll);
    };

    let itemObjs = [];

    if (arr === "Work" || arr === "Proj") {
        itemObjs = items.map(item => ( 
            <EditBox edit = {edit} item = {item} arr = {arr}/>
        ));
    }
    else{
        itemObjs = items.map(item => ( 
            <NoteBox item = {item} />
        ));
    }
    

    if (state === false && divAll === false) {
        handleClick();
    }

    return (
        <div> 
            {itemObjs.slice(0, divAll ? itemObjs.length : 1)}
            {state && itemObjs.length > 1 ? //if state is true, show the button (important to differentiate between Profile and Edit pages)
            <div onClick = {handleClick} className = "info" id = "seeButton"><h4>See {divAll ? "less" : "all"}</h4></div> 
            : null}
        </div>
    );
}