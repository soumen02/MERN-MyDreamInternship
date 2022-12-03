import React from 'react';
import "./EditBox.css";
import ReadMoreText from './ReadMore'; 
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';
import {Card} from "@mui/material";
import "./NoteBox.css";


export default function NoteBox({item}) {
    const [ed, setEdit] = React.useState(false);

    const [titleInput, setTitleInput] = React.useState(item.title);
    const [dateInput, setDateInput] = React.useState(item.date);
    const [textInput, setTextInput] = React.useState(item.text);

    const handleEdit = () => {
        setEdit(!ed);
        // if (ed === true) {
        //     postEdit();
        // }
    };

    const handleChange = (e) => {
        if (e.target.id === "title") {
            setTitleInput(e.target.value);
        } else if (e.target.id === "date") {
            setDateInput(e.target.value);
        } else if (e.target.id === "text") {
            setTextInput(e.target.value);
        }
    };

    // function postEdit() {
    //     let entry = {user: item.user, type: item.type, id: item.id, title: titleInput, date: dateInput, text: textInput};
    //     let path = "http://localhost:5002/post_edit";

    //     axios
    //         .post(path, {
    //             entry
    //         },
    //         )
    //         .then((response) => {

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //         .finally(() => {
                
    //         });
    // }

    let itemObj;
    
    if (ed === false) {
        itemObj =  (
            <Card raised={true} className = "notesCont">
                <div className = "headNote">
                    <div>
                        <h4>{titleInput}</h4>
                    </div>
                    <div className = "ic" onClick = {handleEdit}>
                        { ed ?
                        <DoneIcon fontSize = "medium"/>
                        :
                        <EditIcon fontSize = "medium"/>
                        }   
                    </div>
                </div>
                <div className = "oneBoxNote">
                    <div className = "info">
                        {dateInput}
                    </div>
                    <div className = "field"> 
                        <ReadMoreText text = {
                            <div>{textInput}</div>
                        } />
                    </div>
                </div>
            </Card>
        );
    }
    else {
        itemObj = (
            <Card raised={true} className = "notesCont">
                <div className = "headNote">
                    <div>
                        <h4>
                            <input id = "title" type="text" value={titleInput} onChange={handleChange}/>
                        </h4>
                    </div>
                    <div className = "ic" onClick = {handleEdit}>
                        { ed ?
                        <DoneIcon fontSize = "medium"/>
                        :
                        <EditIcon fontSize = "medium"/>
                        }   
                    </div>
                </div>
                <div className = "oneBoxNote">
                    <div className = "info">
                        <input id = "date" type="text" value={dateInput} onChange={handleChange}/>
                    </div>
                    <div className = "field"> 
                        <input id = "text" type="text" className = "textField" value={textInput} onChange={handleChange}/>
                    </div>
                </div>
            </Card>
        )
    }

    return (
        <div>{itemObj}</div>
    );
}
