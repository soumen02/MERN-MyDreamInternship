import React from 'react';
import { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios';
import {Card} from "@mui/material";


export default function BoxField({email}) {

    const [date, setDate] = useState("");
    const [gpa, setGPA] = useState("");
    const [uni, setUni] = useState("");
    const [userData, setuserData] = useState({});
    const [photo, setPhoto] = useState("");
    const [photoName, setPhotoName] = useState("");
    const [imgPath, setImgPath] = useState("");

    const [ed, setEdit] = React.useState(false);

    const handleEdit = () => {
        setEdit(!ed);
        if (ed === true) {
            postEdit();
        }
    };

    const handleChange = (e) => {
        if (e.target.id === "date") {
            setDate(e.target.value);
        } else if (e.target.id === "gpa") {
            setGPA(e.target.value);
        } else if (e.target.id === "uni") {
            setUni(e.target.value);
        }
    };

    function postEdit() {
        let entry = {email: userData.email, 
            password: userData.password, 
            firstName: userData.firstName, 
            lastName: userData.lastName, 
            gradDate: date, gpa: gpa, uni: uni, photo: photoName};
        let path = "http://localhost:5002/post_editUser";

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

    const fetchUserData = () => {
        axios
        .post("http://localhost:5002/post_userEmail", {
            email: email
        })
        .then((response) => {
            // axios bundles up all response data in response.data property
            setuserData(response.data)
            setDate(response.data.gradDate);
            setGPA(response.data.gpa);
            setUni(response.data.uni);
            setPhotoName(response.data.photo);
            setPathtoImg(response.data.photo);
        })
        .catch((err) => {
            // catching error
        })
        .finally(() => {

        });
    };

    const setPathtoImg = (image) => {
        axios
        .post("http://localhost:5002/post_pathToImg", {
            img: image
        })
        .then((response) => {
            // axios bundles up all response data in response.data property
            setImgPath(response.data);
        })
        .catch((err) => {
            // catching error
        })
    }

    useEffect(() => {
        // fetch messages this once
        fetchUserData();
        setPathtoImg();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("photo", photo);

        axios
        .post("http://localhost:5002/post_photo", formData)
        .then((response) => {
            setPhotoName(response.data[1]);
            setImgPath(response.data[0] + response.data[1]);
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    };

    let itemObj;

    if (ed === false) {
        itemObj =  (
            <Card raised = {true} className = "contBox">

                <img id = "pfp" src={imgPath} alt="pfp" width = "200"/>

                <div className = "titleEdit">
                    <div>
                        <div className = "title" id = "name">{userData.firstName + " " + userData.lastName}</div>
                    </div>
                    <div className = "edit" onClick = {handleEdit}>
                        { ed ?
                        <DoneIcon fontSize = "medium"/>
                        :
                        <EditIcon fontSize = "medium"/>
                        }  
                    </div>
                </div>

                <div className = "box">
                    <div>Start & Graduation Dates</div>
                    <div>{date}</div>  {/*Aug 2020 - Present*/}
                </div>

                <div className = "box">
                    <div>Cumulative GPA</div>
                    <div>{gpa}</div> {/*4.0*/}
                </div>

                <div className = "box" id = "end">
                    <div>School</div>
                    <div>{uni}</div> {/*University of Waterloo*/}
                </div>

            </Card>
        );
    }
    else {
        itemObj = (
            <Card raised = {true} className = "contBox">

                <img id = "pfp" src={imgPath} alt="pfp" width = "200"/>

                <form onSubmit = {handleSubmit} enctype="multipart/form-data">
                    <input 
                        type="file" 
                        accept = ".png, .jpg, .jpeg" 
                        name = "photo"
                        onChange = {handlePhoto}
                    />
                    <input type="submit" value="Submit" />
                </form>

                <div className = "titleEdit">
                    <div>
                        <div className = "title" id = "name">{userData.firstName + " " + userData.lastName}</div>
                    </div>
                    <div className = "edit" onClick = {handleEdit}>
                        { ed ?
                        <DoneIcon fontSize = "medium"/>
                        :
                        <EditIcon fontSize = "medium"/>
                        }   
                    </div>
                </div>

                <div className = "box">
                    <div>Start & Graduation Dates</div>
                    <input id = "date" type="text" value={date} onChange={handleChange}/>
                </div>

                <div className = "box">
                    <div>Cumulative GPA</div>
                    <input id = "gpa" type="text" value={gpa} onChange={handleChange}/>
                </div>

                <div className = "box" id = "end">
                    <div>School</div>
                    <input id = "uni" type="text" value={uni} onChange={handleChange}/>
                </div>

            </Card>
        )
    }

    return (
        <div>{itemObj}</div>
    );
}

