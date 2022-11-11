import React from 'react';
import "./EditBox.css";
import ReadMoreText from './ReadMore'; 
// import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

export default function EditBox({edit, title, org, date, text}) {
    const [ed, setEdit] = React.useState(false);

    const handleEdit = () => {
        setEdit(!ed);
    };

    let itemObj;
    
    if (edit === true) {
        if (ed === false) {
            itemObj =  (
                <div className = "overallCont">
                    <div className = "head">
                        <div>
                            <h3>Section</h3>
                        </div>
                        <div className = "ic" onClick = {handleEdit}>
                            { ed ?
                            <DoneIcon fontSize = "medium"/>
                            :
                            <EditIcon fontSize = "medium"/>
                            }   
                        </div>
                    </div>
                    <div className = "oneBox">
                        <div className = "info"><h4>{title}</h4>{org}<br></br>{date}</div>
                        <div className = "field"> 
                            <ReadMoreText text = {
                                <div>{text}</div>
                            } />
                        </div>
                    </div>
                </div>
            );
        }
        else {
            itemObj = (
                <div className = "overallCont">
                    <div className = "head">
                        <div>
                            <h3>Section</h3>
                        </div>
                        <div className = "ic" onClick = {handleEdit}>
                            { ed ?
                            <DoneIcon fontSize = "medium"/>
                            :
                            <EditIcon fontSize = "medium"/>
                            }   
                        </div>
                    </div>
                    <div className = "oneBox">
                        <div className = "info"><h4><input type="text" defaultValue={title}/></h4>
                            <input type="text" defaultValue={org}/><br></br>
                            <input type="text" defaultValue={date}/>
                        </div>
                        <div className = "field"> 
                            <input type="text" className = "textField" defaultValue={text}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
    else {
        itemObj = (
            <div className = "oneBox">
                <div className = "info"><h4>{title}</h4>{org}<br></br>{date}</div>
                <div className = "field"> 
                    <ReadMoreText text = {
                        <div>{text}</div>
                    } />
                </div>
            </div>
        );
    }

    


    return (
        <div>{itemObj}</div>
    );
}