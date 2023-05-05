import React from 'react'
import "./Styles/Dashboard.css"
import Navigation from "./Navigation"
import { Typography } from "@mui/material";
import {VscAdd} from "react-icons/vsc"
import { Link } from "react-router-dom";

export default function Dashboard() {



    return (
        <>
            <Navigation/>

            <div className="container my-5" id="Dashboard-Container">
                <Typography color="#031429" fontWeight="bold" fontSize="2.2rem" textAlign={"center"} fontFamily="Nunito"> Welcome to the Dashboard </Typography>
            </div>

            <div className="container" id="Page-Container">
                <h4>Dispatch Document</h4>
                <h4><Link to="AddDocument"><VscAdd/></Link></h4>
            </div>
            
            <div className="container" id="Page-Container">
                <h4>Track Document</h4>
                <h4><Link to="TrackDocument"><VscAdd/></Link></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>Update Document</h4>
                <h4><Link to="UpdateDocument"><VscAdd/></Link></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>Delete Document</h4>
                <h4><Link to="DeleteDocument"><VscAdd/></Link></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>View Analytics</h4>
                <h4><Link to="ViewAnalytics"><VscAdd/></Link></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>View Student Documents</h4>
                <h4><Link to="ViewStudents"><VscAdd/></Link></h4>
            </div>

            <footer className="footer">
                <div className="container">
                    <h6>© 2021 - Document Dispatch Register</h6>
                </div>
            </footer>
        </>
    )

}