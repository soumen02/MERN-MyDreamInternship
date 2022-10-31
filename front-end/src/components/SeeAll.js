import React from 'react';
import "./SeeAll.css";
import ReadMoreText from './ReadMore'; 

export default function SeeAll({items}) {
    const [divAll, setDivAll] = React.useState(false);
    const handleClick = () => {
        setDivAll(!divAll);
        //hide();
    };

    // let button = document.getElementById("seeButton");
    // const hide = () => {
    //     if (divAll) {
    //         button.style.display = "none";
    //     } else {
    //         button.style.display = "block";
    //     }
    // };
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

    return (
        <div> 
            {itemObjs.slice(0, divAll ? itemObjs.length : 1)}                
            <div onClick = {handleClick} className = "info" id = "seeButton"><h4>See {divAll ? "less" : "all"}</h4></div>
        </div>
    );
}