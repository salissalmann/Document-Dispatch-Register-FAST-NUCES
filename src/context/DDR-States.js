import React, { useState } from "react";
import DDRContext from "./DDR-Context";

const DDRStates = (props)=>
{
    const AdminEmail = "admin@nu.edu.pk";
    const AdminPassword = "admin";

    const Data = [
        {
            "id": "20I-0001",
            "sender": "20I-0489 John Doe",
            "receiver": "Director",
            "documentType": "Academic Calendar",
            "date": "2022-04-28",
            "time": "10:30:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0002",
            "sender": "20I-0625 Alice Smith",
            "receiver": "HOD-CS",
            "documentType": "Curriculum Proposal",
            "date": "2022-04-29",
            "time": "13:45:00",
            "status": "Pending"
        },
        {
            "id": "20I-0003",
            "sender": "20I-0420 Bob Johnson",
            "receiver": "Mr.Amir Munir",
            "documentType": "Student Scholarship Application",
            "date": "2022-04-30",
            "time": "09:15:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0004",
            "sender": "20I-0310 Mary Smith",
            "receiver": "One Stop Solution",
            "documentType": "Student Transcript Request",
            "date": "2022-04-30",
            "time": "14:30:00",
            "status": "Pending"
        },
        {
            "id": "20I-0005",
            "sender": "20I-0587 Joe Black",
            "receiver": "HOD-AI",
            "documentType": "Course Syllabus",
            "date": "2022-05-01",
            "time": "10:00:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0006",
            "sender": "20I-0721 Sarah White",
            "receiver": "HOD-SE",
            "documentType": "Project Proposal",
            "date": "2022-05-02",
            "time": "11:15:00",
            "status": "Pending"
        },
        {
            "id": "20I-0007",
            "sender": "20I-0904 David Brown",
            "receiver": "HOD-DS",
            "documentType": "Research Paper",
            "date": "2022-05-03",
            "time": "14:00:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0008",
            "sender": "20I-0192 Rachel Jones",
            "receiver": "HOD-CY",
            "documentType": "Faculty Job Application",
            "date": "2022-05-04",
            "time": "09:30:00",
            "status": "Pending"
        },
        {
            "id": "20I-0009",
            "sender": "20I-0556 Michael Davis",
            "receiver": "Director",
            "documentType": "Institutional Strategic Plan",
            "date": "2022-05-05",
            "time": "10:45:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0010",
            "sender": "20I-0662 Emily Wilson",
            "receiver": "HOD-CS",
            "documentType": "Faculty Meeting Agenda",
            "date": "2022-05-06",
            "time": "12:00:00",
            "status": "Pending"
        },
        {
            "id": "20I-0011",
            "sender": "20I-0432 Alex Lee",
            "receiver": "Mr.Amir Munir",
            "documentType": "Student Appeal Request",
            "date": "2022-05-06",
            "time": "15:30:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0012",
            "sender": "20I-0231 Samantha Green",
            "receiver": "One Stop Solution",
            "documentType": "Degree Verification Request",
            "date": "2022-05-07",
            "time": "11:30:00",
            "status": "Pending"
        },
        {
            "id": "20I-0013",
            "sender": "20I-0805 Daniel Miller",
            "receiver": "HOD-AI",
            "documentType": "Course Evaluation Report",
            "date": "2022-05-08",
            "time": "09:00:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0014",
            "sender": "20I-0512 Olivia Taylor",
            "receiver": "HOD-SE",
            "documentType": "Internship Proposal",
            "date": "2022-05-09",
            "time": "14:45:00",
            "status": "Pending"
        },
        {
            "id": "20I-0015",
            "sender": "20I-0773 Ethan Hall",
            "receiver": "HOD-DS",
            "documentType": "Data Analysis Report",
            "date": "2022-05-10",
            "time": "13:15:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0015",
            "sender": "20I-0773 Ethan Hall",
            "receiver": "HOD-CS",
            "documentType": "Flex Grade Change Request",
            "date": "2022-08-15",
            "time": "08:18:00",
            "status": "Pending"
        },
        {
            "id": "20I-0016",
            "sender": "20I-0098 Sophia Adams",
            "receiver": "HOD-CY",
            "documentType": "PhD Thesis Proposal",
            "date": "2022-05-11",
            "time": "10:30:00",
            "status": "Pending"
        },
        {
            "id": "20I-0017",
            "sender": "20I-0475 Ryan Brown",
            "receiver": "Director",
            "documentType": "Student Disciplinary Action Report",
            "date": "2022-05-12",
            "time": "11:45:00",
            "status": "Dispatched"
        },
        {
            "id": "20I-0018",
            "sender": "20I-0699 Mia Clark",
            "receiver": "HOD-CS",
            "documentType": "Course Material Request",
            "date": "2022-05-13",
            "time": "09:30:00",
            "status": "Pending"
        },
        {
            "id": "20I-0019",
            "sender": "20I-0337 Jacob Scott",
            "receiver": "Mr.Amir Munir",
            "documentType": "Graduation Ceremony Details",
            "date": "2022-05-13",
            "time": "14:00:00",
            "status": "Dispatched"
        }
    ]
    const [Documents , SetDocuments] = useState(Data)

    const [SearchedDocuments, SetSearch] = useState([])
    const SearchDocument = (rollnumber) =>
    {   
        let NewData = []
        Documents.map(document =>{
            if (document.id === rollnumber) 
                NewData.push(document)    
        })
        SetSearch(NewData)
    }

    const Dispatch = (element) =>{
        let Data = []
        Documents.map((document) => {
            if (document.id===element.id && document.date===element.date && document.time===element.time)
            {
                document.status = "Dispatched"
            }
            Data.push(document)
        })
        SetDocuments(Data)
    }

    const [AllDocuments, SetAllDocuments] = useState([])
    const GetDocument = () =>
    {   
        let NewData = []
        Documents.map(document =>{
            NewData.push(document)    
        })
        SetAllDocuments(NewData)
    }

    const Delete = (element) =>{
        let Data = []
        Documents.map((document) => {
            if (document.id===element.id && document.date===element.date && document.time===element.time)
            {
                document.status = "Dispatched"
            }
            else
            {
                Data.push(document)
            }
        })
        SetDocuments(Data)
    }


    return (
        <DDRContext.Provider value={{ Delete , AdminEmail , AdminPassword , Documents , SetDocuments , SearchDocument , SearchedDocuments, Dispatch , GetDocument , AllDocuments }}>
            {props.children}
        </DDRContext.Provider>
    )
}

export default DDRStates;
