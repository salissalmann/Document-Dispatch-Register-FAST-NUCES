import Navigation from './Navigation';
import { useState, useContext , useEffect} from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DDRContext from '../context/DDR-Context';
import "./Styles/TrackDocument.css";
import React from "react";

export default function UpdateDocument() {
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
    const [StudentRoll, SetStudentRoll] = useState("");
    const [Submission, SetSubmission] = useState(true);
    const [StudentDocuments, SetStudentDocuments] = useState([]);
  
    const HandleRollNumber = async (e) => { SetStudentRoll(e.target.value); };
  
    const Submit = async (e) => {
        e.preventDefault();
        if (StudentRoll === '') {
            toast.error('Please enter a student roll number');
            return;
        }
        await Context.SearchDocument(StudentRoll);
        SetSubmission(false);
    };
  
    useEffect(() => {
        if (Context.SearchedDocuments.length > 0) {
            SetStudentDocuments(Context.SearchedDocuments);
        }
    }, [Context.SearchedDocuments]);
  
    const Dispatch = (element)=>
    {
        Context.Dispatch(element);
        toast.success("Document Updated Successfully");
    }
    return (
    <>
      <Navigation />
      <div className="container my-5">
        <div className="home-page-text-1">
          <h1>Update Student Documents</h1>
        </div>
      </div>

      {Submission ? (
        <div className="container my-5" id="Form-Container">
          <form onSubmit={Submit}>
            <div className="container my-2">
              <input
                type="text"
                placeholder="Roll Number"
                name="rollNumber"
                id="input-1"
                label="Roll Number"
                onChange={HandleRollNumber}
              />
            </div>
            <Button
              type="submit"
              padding="2rem"
              sx={{
                backgroundColor: "#031429",
                color: "white",
                width: "100%",
                marginTop: "3%",
                marginLeft: "-1%",
              }}
            >
              {" "}
              Dispatch Document
            </Button>
            <ToastContainer theme="colored" />
          </form>
        </div>
      ) : (
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
                  <TableCell>   </TableCell>
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
                    {(element.status==="Pending")?(<TableCell><button className='btn btn-warning' onClick={()=>{Dispatch(element)}}>Dispatch</button></TableCell>):(<>    </>)}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
      <ToastContainer theme="colored"/>
    </>
  );
}
