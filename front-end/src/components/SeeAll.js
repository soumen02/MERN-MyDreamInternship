import React from 'react';
import "./SeeAll.css";
// import ReadMoreText from './ReadMore'; 
// import TextField from '@mui/material/TextField';
// import EditIcon from '@mui/icons-material/Edit';
// import DoneIcon from '@mui/icons-material/Done';
import EditBox from './EditBox';

export default function SeeAll({items, state, edit, arr}) {
    const [divAll, setDivAll] = React.useState(false);
    const handleClick = () => {
        setDivAll(!divAll);
    };

    let itemObjs = [];

    itemObjs = items.map(item => ( 
        <EditBox edit = {edit} item = {item} arr = {arr}/>
    ));
    

    if (state === false && divAll === false) {
        handleClick();
    }

    return (
        <div> 
            {itemObjs.slice(0, divAll ? itemObjs.length : 1)}
            {state ? //if state is true, show the button (important to differentiate between Profile and Edit pages)
            <div onClick = {handleClick} className = "info" id = "seeButton"><h4>See {divAll ? "less" : "all"}</h4></div> 
            : null}
        </div>
    );
}