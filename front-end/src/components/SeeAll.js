import React from 'react';
import "./SeeAll.css";
// import ReadMoreText from './ReadMore'; 
// import TextField from '@mui/material/TextField';
// import EditIcon from '@mui/icons-material/Edit';
// import DoneIcon from '@mui/icons-material/Done';
import EditBox from './EditBox';

export default function SeeAll({items, state, edit}) {
    const [divAll, setDivAll] = React.useState(false);
    const handleClick = () => {
        setDivAll(!divAll);
    };

    let itemObjs = [];

    itemObjs = items.map(item => ( 
        <EditBox edit = {edit} title = {item.title} org = {item.org} date = {item.date} text = {item.text} />
    ));
    

    // itemObjs = items.map(item => (
    //     <div className = "overallCont">
    //         <div className = "head">
    //             <div>
    //                 <h3>Section</h3>
    //             </div>
    //             <div className = "ic" onClick = {handleEdit}>
    //                 { ed ?
    //                 <DoneIcon fontSize = "medium"/>
    //                 :
    //                 <EditIcon fontSize = "medium"/>
    //                 }   
    //             </div>
    //         </div>
    //         <div className = "oneBox">
    //             <div className = "info"><h4>{item.title}</h4>{item.org}<br></br>{item.date}</div>
    //             <div className = "field"> 
    //                 <ReadMoreText text = {
    //                     <div>{item.text}</div>
    //                 } />
    //             </div>
    //         </div>
    //     </div>
    // ));

    // if (ed === false) {
    //     itemObjs = items.map(item => (
            // <div className = "overallCont">
            //     <div className = "head">
            //         <div>
            //             <h3>Section</h3>
            //         </div>
            //         <div className = "ic" onClick = {handleEdit}>
            //             { ed ?
            //             <DoneIcon fontSize = "medium"/>
            //             :
            //             <EditIcon fontSize = "medium"/>
            //             }   
            //         </div>
            //     </div>
            //     <div className = "oneBox">
            //         <div className = "info"><h4>{item.title}</h4>{item.org}<br></br>{item.date}</div>
            //         <div className = "field"> 
            //             <ReadMoreText text = {
            //                 <div>{item.text}</div>
            //             } />
            //         </div>
            //     </div>
            // </div>
    //         <EditBox title = {item.title} org = {item.org} date = {item.date} text = {item.text} />
    //     ));
    // }
    // else {
    //     itemObjs = items.map(item => (
            // <div className = "overallCont">
            //     <div className = "head">
            //         <div>
            //             <h3>Section</h3>
            //         </div>
            //         <div className = "ic" onClick = {handleEdit}>
            //             { ed ?
            //             <DoneIcon fontSize = "medium"/>
            //             :
            //             <EditIcon fontSize = "medium"/>
            //             }   
            //         </div>
            //     </div>
            //     <div className = "oneBox">
            //         <div className = "info"><h4><input type="text" defaultValue={item.title}/></h4>
            //             <input type="text" defaultValue={item.org}/><br></br>
            //             <input type="text" defaultValue={item.date}/>
            //         </div>
            //         <div className = "field"> 
            //             <input type="text" className = "textField" defaultValue={item.text}/>
            //         </div>
            //     </div>
            // </div>
    //     ));
    // }


    // <input type="text" id="word1" oninput="word1Function(this);" value="Hello"><br>

    // const [firstName, setFirstName] = useState('');
    // <input value={firstName}   name="firstName" onChange={e => setFirstName(e.target.value)} />  

    // WORKS
    // <input type="text" defaultValue="Hello"/>

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