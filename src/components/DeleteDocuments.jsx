import React from 'react';
import Navigation from './Navigation';
import { useState, useContext , useEffect} from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DDRContext from '../context/DDR-Context';
import "./Styles/TrackDocument.css";

export default function StudentDocument() {
    function formatDate(dateString) {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
      
    const Context = useContext(DDRContext);
    const [StudentDocuments, SetStudentDocuments] = useState([]);
  
  
    useEffect( () => {
        const Fetch = async () =>
        {
            await Context.GetDocument();
            if (Context.AllDocuments.length > 0) {
                SetStudentDocuments(Context.AllDocuments);
            }
        }
        Fetch()
    }, [Context.AllDocuments]);

    const Delete = (element)=>
    {
        Context.Delete(element);
        toast.error("Successfully Deleted")
    }
  
    return (
        <>
            <Navigation />
            <div className="container my-5">
                <div className='home-page-text-1'>
                    <h1>Delete Student Documents</h1>
                </div>
            </div>
  
            <div className="container my-2">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sender</TableCell>
                                <TableCell>Receiver</TableCell>
                                <TableCell>Document Type</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>     </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {StudentDocuments.map((element, index) => (
                                <TableRow key={index}>
                                    <TableCell>{element.sender}</TableCell>
                                    <TableCell>{element.receiver}</TableCell>
                                    <TableCell>{element.documentType}</TableCell>
                                    <TableCell>{formatDate(element.date)}</TableCell>
                                    <TableCell>{element.time}</TableCell>
                                    <TableCell>{element.status}</TableCell>
                                    <TableCell><button className='btn btn-danger' onClick={()=>{Delete(element)}}>Delete</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <ToastContainer theme="colored"/>
        </>
    )
}