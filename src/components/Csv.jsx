import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from "react"

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"


export default function Csv() {

    const [csv, setCsv] = useState("")

    // const history=useNavigate()

    const postData = (e) => {
        e.preventDefault();
    //     axios.get(`https://dummyjson.com/products`,{
    //         csv:csv 
    //     })
    //    .then(()=>{
    //     // history("/");
    //    })
    console.log(e.target.files);
    }

    // const [csv, setCsv] = useState([]);

    // const fetchdata = async () => {
    //   const { data } = await axios.get("https://dummyjson.com/products")
    //   setCsv(data.data);
    //   console.log(data);
    // }
  
    // useEffect(() => {
    //   fetchdata();
    // }, []);



    return (
        <div className='container mt-5'>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">UserName</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter User Name" />
            </div>
            <div>
                <label for="formFileLg" className="form-label">Upload Csv File</label>
                {/* <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={(e) => setCsv (e.target.value)} /> */}
                <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={(e) =>  (e.target.value)} />
            </div>
            {/* <button onClick={postData} type="submit" className="btn btn-primary mt-3">Add</button> */}
        </div>
    )
}
