import React from 'react'
import Navigation from './Navigation'
import {useState,useContext} from 'react'
import { Button} from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
import "./Styles/DispatchDocument.css"
import DDRContext from '../context/DDR-Context';
import { useNavigate } from "react-router-dom";
export default function DispatchDocument() 
{
    const Navigate = useNavigate()
    const Context = useContext(DDRContext)
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [file , setFile ] = useState();
    const [rollNumber, setRollNumber ] = useState()
    const [sender , setSender] = useState()
    const [reciever, setReciever] = useState()
    const [documentType, setDocumentType] = useState()
  
    const UploadFile = ()=>
    {
          document.getElementById("fileID").click();
    }

    const HandleRollNumber = async (e) => { setRollNumber(e.target.value); };
    const HandleSenderValue = async (e) => { setSender(e.target.value); };
    const HandleRecieverValue = async (e) => { setReciever(e.target.value) };
    const HandleDocumentType = async (e) => { setDocumentType(e.target.value); };

    const handleFileChange = (event)    => { 
      setFile(event.target.files[0])
      const file = event.target.files[0];
      if (file) {
          setFile(file);
          setFileName(file.name);
        } else {
          setFile(null);
          setFileName("");
        }
      ;};
  
    const Submit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(file)
      const NewData = {
        "id": rollNumber,
        "sender": sender,
        "receiver": reciever,
        "documentType": documentType,
        "date": Date.now(),
        "time": currentTime,
        "status": "Dispatched"
      }
      const updatedData = [...Context.Documents, NewData];
      Context.SetDocuments(updatedData);

      setRollNumber("")
      setSender("")
      setReciever("")
      setFileName("")
      toast.success("Document dispatched successfully")
      setTimeout(() => {
        Navigate("/dashboard");
    }, 1000);

    };


  return (
    <>
        <Navigation/>
        <div className="container">
            <div className='home-page-text-1'>
                <h1>DOCUMENT INFORMATION</h1>
            </div>
        </div>

        <div className="container my-5" id="Form-Container">
            <form onSubmit={Submit}>
                <div className="container my-2">
                    <input required type="text" placeholder="Roll Number" name="rollNumber" id="input-1" label="Roll Number" onChange={HandleRollNumber}/>
                </div>

                <div className="container my-2">
                    <input type="text" placeholder="Sender" name="reciever" id="input" onChange={HandleSenderValue}/>                
                    <select id='input-fy-2' placeholder='Sender' required onChange={HandleRecieverValue}>
                        <option value="">-- Select Reciever --</option>
                        <option value="Director">Director</option>
                        <option value="HOD-CS">HOD-CS</option>
                        <option value="HOD-AI">HOD-AI</option>
                        <option value="HOD-DS">HOD-DS</option>
                        <option value="HOD-CY">HOD-CY</option>
                        <option value="One-Stop-Solution">One-Stop-Solution</option>
                        <option value="Mr.Amir Rehman">Mr.Amir Rehman</option>
                    </select>
                </div>

                <div className="container my-2">
                    <input required type='text' placeholder='Document Type' name='documentType' id='input-1' onChange={HandleDocumentType}/>
                </div>

                <div id="container">
                    <input className="PostPicture" type="file"  onChange={handleFileChange} ref={fileInputRef} id="fileID"  hidden/>            
                    <button id="btn-upload" type="button" onClick={UploadFile}>Choose Document Image</button>  
                </div>

                <div id="container">
                    <span className="form-text">{fileName}</span>
                </div>


                <Button type="submit" padding= "2rem" sx={{backgroundColor:"#031429", color:"white", width:"100%" , marginTop:"3%" ,marginLeft:"-1%"}}> Dispatch Document</Button>
                <ToastContainer theme="colored"/>
            </form>
        </div>    
    </>
  )
}
