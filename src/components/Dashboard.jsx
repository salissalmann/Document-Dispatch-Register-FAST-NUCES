import React, { useContext , useState } from 'react'
import DDRContext from '../context/DDR-Context'
import "./Styles/Dashboard.css"
import Navigation from "./Navigation"
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {VscAdd} from "react-icons/vsc"

export default function Dashboard() {
    return (
        <>
            <Navigation/>

            <div className="container my-5" id="Dashboard-Container">
                <Typography color="#031429" fontWeight="bold" fontSize="2.2rem" textAlign={"center"} fontFamily="Nunito"> Welcome to the Dashboard </Typography>
            </div>

            <div className="container" id="Page-Container">
                <h4>Dispatch Document</h4>
                <h4><VscAdd/></h4>
            </div>
            
            <div className="container" id="Page-Container">
                <h4>Track Document</h4>
                <h4><VscAdd/></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>Update Document</h4>
                <h4><VscAdd/></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>View Analytics</h4>
                <h4><VscAdd/></h4>
            </div>

            <div className="container" id="Page-Container">
                <h4>View Student Documents</h4>
                <h4><VscAdd/></h4>
            </div>

            <footer className="footer">
                <div className="container">
                    <h6>© 2021 - Document Dispatch Register</h6>
                </div>
            </footer>
        </>
    )

}