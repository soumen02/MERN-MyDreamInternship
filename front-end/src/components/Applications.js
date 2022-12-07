import * as React from "react";
import {
  Card,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
} from "@mui/material";
// import useStyles from "./CompaniesStyles";
import { Home } from "@material-ui/icons";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useAuthContext } from "../hooks/useAuthContext";
import NavBar from "./NavBar";
import { useEffect } from "react";

export default function Applications() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/log-in");
    }
  });

  return (
    <div className="container">
      <NavBar pageTitle="Applications" />

      <div className="cards">
        <Link to="/saved" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <BookmarkIcon fontSize="medium" />
            <p>Saved</p>
          </Card>
        </Link>

        <Link to="/in-progress" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <RotateRightIcon fontSize="medium" />
            <p>In Progress</p>
          </Card>
        </Link>

        <Link to="/accepted" style={{ textDecoration: "none" }}>
          <Card raised={true} className="tabs">
            <DoneAllIcon fontSize="medium" />
            <p>Accepted</p>
          </Card>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
