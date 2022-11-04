import React from 'react';
import "./SeeAll.css";
import ReadMoreText from './ReadMore'; 

export default function SeeAll({items, state}) {
    const [divAll, setDivAll] = React.useState(false);
    const handleClick = () => {
        setDivAll(!divAll);
    };

    const itemObjs = items.map(item => (
        <div className = "oneBox">
            <div className = "info"><h4>{item.title}</h4>{item.org}<br></br>{item.date}</div>
            <div className = "field"> 
                <ReadMoreText text = {
                    <div>{item.text}</div>
                } />
            </div>
        </div>
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