import React from 'react';
import "./EditBox.css";
import ReadMoreText from './ReadMore'; 
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';
import {Card} from "@mui/material";
import "./NoteBox.css";
import { useAuthContext } from '../hooks/useAuthContext';
import DeleteIcon from '@mui/icons-material/Delete';



export default function NoteBox({item, id}) {
    const [ed, setEdit] = React.useState(false);

    const [titleInput, setTitleInput] = React.useState(item.title);
    const [dateInput, setDateInput] = React.useState(item.date);
    const [textInput, setTextInput] = React.useState(item.text);
    const {user} = useAuthContext();

    const handleEdit = () => {
        setEdit(!ed);
        if (ed === true) {
            postEdit();
        }
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

    function postEdit() {
        let path = "http://localhost:5002/post_editNote";
        let entry = [user.email, id, { id: item.id, title: titleInput, date: dateInput, text: textInput }];
        axios
            .post(path, {
                entry
            },
            )
            .then((response) => {

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                
            });
    }

    function handleRemove() {
        let path = "http://localhost:5002/post_delNote";
        let entry = [user.email, id, { id: item.id, title: titleInput, date: dateInput, text: textInput }];
        axios
            .post(path, {
                entry
            },
            )
            .then((response) => {

            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                
            });
    }

    let itemObj;
    
    if (ed === false) {
        itemObj =  (
            <Card raised={true} className = "notesCont">
                <div className = "headNote">
                    <div>
                        <h4>{titleInput}</h4>
                    </div>

                    <div className = "iconsNew">
                        <div className = "ic" onClick = {handleEdit}>
                            { ed ?
                            <DoneIcon fontSize = "medium"/>
                            :
                            <EditIcon fontSize = "medium"/>
                            }   
                        </div>
                        <div className = "del" onClick = {handleRemove}>
                            <DeleteIcon fontSize = "medium"/>
                        </div>
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
                    <div className = "iconsNew">
                        <div className = "ic" onClick = {handleEdit}>
                            { ed ?
                            <DoneIcon fontSize = "medium"/>
                            :
                            <EditIcon fontSize = "medium"/>
                            }   
                        </div>
                        <div className = "del" onClick = {handleRemove}>
                            <DeleteIcon fontSize = "medium"/>
                        </div>
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
