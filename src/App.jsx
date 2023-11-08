/*
Our Queue should contain Three basic sections: Create(Close) Queue, Join Queue and Display Queue Content.
Imagine this is our web page, the general structure should look like this:

---------------------------------------------------------------------
|                   Code Platoon Simplified Queue                   |
|                                                                   |
|                        TA/Intructor's name                        |
|                     |Open Queue|Close Queue|                      |
|                                                                   |
|                         (Queue List)                              |
|                 Francisco's Queue (For example)                   |
|                            Join                                   |
|         |Student's name    Question description   Location|       |
|              (List each student from the queue here)              |
|                                                                   |
|                 Adam's Queue (Another example)                    |
|                            ......                                 |
---------------------------------------------------------------------

*/

//Import Section
import { useState, useEffect } from 'react'
import './App.css'

import QHostNames from './data/q_host_names.json'
import studentNames from './data/q_student_names.json'

import Buttons from './component/buttons'
import Button from 'react-bootstrap/Button';

//Sort TA/Instructor name list and student name list alphabetically
QHostNames.sort()
studentNames.sort()

function App() {

  //useState section
  const [hostInput, setHostInput] = useState("")
  const [QInfo, setQInfo] = useState({})

  const [studentName,setStudentName] = useState("")
  const [studentComment,setComment] = useState("")
  const [studentLocation,setLocation] = useState("")
  const [studentTime,setTime] = useState("")
  const [timeSwitch, setSwitch] = useState(false)

  const [removed,setRemoved] = useState(false)
  const [numAnswered, setNumAnswered] = useState(-1)
  //helper function section

  const showDisplay = (idx) => {
    let form = document.getElementById("form"+idx)
    let button = document.getElementById("button"+idx)

    if(form.style.display === 'none') {
      form.style.display = 'block'
    }
    else{
      form.style.display = 'none'
    }

    (button.style.display === 'none') ? 
      button.style.display = 'block' : button.style.display = 'none'
  }

  const insertStudent = (Hname) => {
    let infoCopy = {...QInfo}
    infoCopy[Hname] = {...QInfo[Hname], 
      [studentName]:{'comment':studentComment,
      'location':studentLocation, 'time':studentTime}}
    setQInfo(infoCopy)
    
    setSwitch(!timeSwitch)
    
    setComment("")
    setStudentName("")
    setLocation("")
  }

  const removeStudent = (Hname,Sname) => {
    let infoCopy = {...QInfo}
    delete infoCopy[Hname][Sname]
    setQInfo(infoCopy)

    setRemoved(!removed)
  }
  
  useEffect (()=>{
    console.log(QInfo)
    setTime(new Date())
  },[QInfo,timeSwitch])

  useEffect (()=>{
    setNumAnswered(numAnswered+1)
},[removed])

  return (
    <>
      {/* Title */}
      <h1>Code Platoon Simplified Queue</h1>

      {/* TA/INstructor Name Input */}
      <label>Host Name:</label>
      <input className='border-2 border-red-600' 
        list='host1' value={hostInput} onChange={(e)=>setHostInput(e.target.value)}></input>
      <datalist id='host1'>
        {
          QHostNames.map((name,idx)=>(
            <option key={idx}>{name}</option>
          ))
        }
      </datalist>

      {/* Create open and close buttons to store the input
       name into a data structure (object/dictionary in this case) */}
      <div>
        <Buttons hostInput = {hostInput} QInfo = {QInfo} 
          setHostInput = {setHostInput} setQInfo = {setQInfo} />
      </div>
      
      
      {/* To showcase useEffect, we can use it to display the number of questions answered(this is a later story actually,
         after the implementation of student removal) */}
      
      <p>Number of questions answered: {numAnswered}</p>

      {/* 
      This section is for displaying the opening queues and the students who joined the queues.
      We need to display the existing queues first, then display each student under the queue that they are currently on.

      There should be a 'JOIN' button for students to join the queue; a student info form should pop out when the button gets clicked.
      The info form should contain four inputs: student's name, question description/comment, location (Zoom breakout room 5 e.g.)
      After students join the queue, there should be a 'REMOVE' button to remove students from the queue. 
      */}
        <ul>
          {
            Object.keys(QInfo).map((Hname,idx) => (
              <li 
                key={idx}>{Hname + "'s queue is opening"}

                <Button className='px-1 py-0' 
                  onClick={()=>showDisplay(idx)}>JOIN</Button>
                
                <form id={"form"+idx} className='border-2 border-green-500' 
                  style={{display: 'none'}}>
                  <input value={studentName} type='text' list='students' onChange={(e) => setStudentName(e.target.value)}></input>
                  <datalist id='students'>
                    {
                      studentNames.map((name,idx)=>(
                        <option key={idx}>{name}</option>
                      ))
                    }
                  </datalist>
                  <input value={studentComment} type='text' onChange={(e) => setComment(e.target.value)}></input>
                  <input value={studentLocation} type='text' onChange={(e) => setLocation(e.target.value)}></input>
                </form>
                <div>
                  <Button id={"button"+idx}
                   onClick={()=>[insertStudent(Hname),showDisplay(idx)]}
                    style={{display: 'none',margin: 'auto'}}>Submit</Button>
                </div>

                <ol>
                  {
                    Object.keys(QInfo[Hname]).map((Sname,idx2) => (
                      <li 
                      key={idx2}>{Sname + ' ' + QInfo[Hname][Sname].comment
                      + ' ' + QInfo[Hname][Sname].location
                      + ' ' + QInfo[Hname][Sname].time}
                      <Button onClick={()=>removeStudent(Hname,Sname)}>REMOVE</Button>
                      </li>
                      
                    ))
                  }
                </ol>
                
              </li>
            ))
          }
        </ul>
      
    </>
  )
}

export default App










