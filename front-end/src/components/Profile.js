import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import {
  Card,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Footer from "./Footer";
import SeeAll from "./SeeAll";
import BoxField from "./BoxField";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import NavBar from "./NavBar";

export default function Profile() {
  const navigate = useNavigate();
  const [workExp, setWorkExp] = useState([]);
  const [proj, setProj] = useState([]);
  const [setLoaded] = useState(false);
  const { user } = useAuthContext();
  const [setuserData] = useState({});

  // set up loading data from api when the component first loads
  useEffect(() => {
    if (!user) {
      navigate("/log-in");
    } else {
      fetchUserData();
      fetchArrs();
    }
  }, []);

  const fetchArrs = () => {
    axios
      .post("http://localhost:5002/post_expArr", {
        email: user.email,
      })
      .then((response) => {
        // axios bundles up all response data in response.data property
        let array1 = response.data[0];
        // console.log(array1);
        let array2 = response.data[1];
        setWorkExp(array1);
        // console.log(workExp);
        setProj(array2);
      })
      .catch((err) => {
        // catching error
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true);
      });
  };

  const fetchUserData = () => {
    axios
      .post("http://localhost:5002/post_userEmail", {
        email: user.email,
      })
      .then((response) => {
        // axios bundles up all response data in response.data property
        setuserData(response.data);
      })
      .catch((err) => {
        // catching error
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true);
      });
  };

  return (
    <div id="content">
      <NavBar pageTitle="Profile" />
      <div id="container">
        
        <BoxField email={user ? user.email : "Error"} />

        <Card raised={true} className="contBox">
          <div className="titleEdit">
            <div className="title">Work Experience</div>
            <Link to="/edit/work" className="edit">
              <EditIcon fontSize="medium" />
            </Link>
          </div>
          <SeeAll items={workExp} state={true} edit={false} arr="Work" />
        </Card>

        <Card raised={true} className="contBox">
          <div className="titleEdit">
            <div className="title">Projects</div>
            <Link to="/edit/proj" className="edit">
              <EditIcon fontSize="medium" />
            </Link>
          </div>
          <SeeAll items={proj} state={true} edit={false} arr="Proj" />
        </Card>

        <div id="endpage"></div>
      </div>
      <Footer />
    </div>
  );
}
