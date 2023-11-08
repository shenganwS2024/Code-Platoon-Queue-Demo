/*
Our Queue should contain Three basic sections: Create Queue Section, Join Queue Section and Display Queue Section.
Imagine this is our web page, the general structure should look like this:

---------------------------------------------------------------------
|                   Code Platoon Simplified Queue                   |
|                                                                   |
|                        TA/Intructor's name                        |
|                     |Open Queue|Close Queue|                      |
|                                                                   |
|                         (Queue List)                              |
|                 Francisco's Queue (For example)                   |
|                                                                   |
|        Join |Student's name    Question description   Time|       |
|              (List each student from the queue here)              |
|                                                                   |
|                 Adam's Queue (Another example)                    |
|                            ......                                 |
---------------------------------------------------------------------

*/

//Import Section
import { useState, useEffect } from 'react'
import './App.css'

import QueueHost from './components_back/openQeue'
import Buttons from './components_back/buttons'
import Form from './components_back/form'
import SubmitButton from './components_back/submitButton'
import StudentList from './components_back/studentList'

import QHostNames from './data/q_host_names.json'
import studentNames from './data/q_student_names.json'

//Sort TA/Instructor name list and student name list alphabetically
QHostNames.sort()
studentNames.sort()

function App() {

  //useState section
  const [QCollection, setQCollection] = useState({})
  const [QHost, setQHost] = useState("")

  const [studentName,setName] = useState("")
  const [studentComment,setComment] = useState("")
  const [studentLocation,setLocation] = useState("")
  const [studentTime,setTime] = useState("")

  const [answered,setAnswered] = useState("")
  const [numQuestion,setNumQuestion] = useState(0)

  //helper function section
  const changeVisibility = (idx) => {
      
    const form = document.getElementById('form'+idx);
    const submit = document.getElementById('submit'+idx);

    submit.style.display === 'none'?submit.style.display = 'block':submit.style.display = 'none';
    form.style.display === 'none'?form.style.display = 'block':form.style.display = 'none';
  }
  
  useEffect(() => {
    // Effect code here
    if(answered !== "") {
      setNumQuestion(numQuestion + 1)
      setAnswered("")
    }

    if(studentName !== "") {
      setTime(new Date())
    }
  }, [answered, studentName]);


  return (
    <>
      {/* Title */}
      <h1>Code Platoon Simplified Queue</h1>

      {/* TA/INstructor Name Input */}
      <div>
        <QueueHost parentCallback={setQHost} inputName={QHost} HostNames={QHostNames}/>
      </div>

      {/* Create open and close buttons to store the input name into a data structure (object/dictionary in this case) */}
      <Buttons QHostNames={QHostNames} QHost={QHost} QCollection={QCollection} setQCollection={setQCollection} setQHost={setQHost}/>
      
      {/* To showcase useEffect, we can use it to display the number of questions answered(this is a later story actually,
         after the implementation of student removal) */}
      <p>Number of questions answered: {numQuestion}</p>

      {/* 
      This section is for displaying the opening queues and the students who joined the queues.
      We need to display the existing queues first, then display each student under the queue that they are currently on.
      There should be a 'JOIN' button for students to join the queue; a student info form should pop out when the button gets clicked.
      After students join the queue, there should be a 'REMOVE' button to remove students from the queue. 
      */}
      <div id='display'>
        <ul>
          {
            Object.keys(QCollection).map((item,idx)=>(
              <li key = {idx} >{item}'s queue is open 
              <button className="border-2 border-green-600" onClick={()=>changeVisibility(idx)}>JOIN</button>

              <Form idx = {idx} studentName = {studentName} setName = {setName} studentNames = {studentNames}
               studentComment = {studentComment} setComment = {setComment} studentLocation = {studentLocation} setLocation = {setLocation}/>

              <SubmitButton idx = {idx} changeVisibility = {changeVisibility} item = {item} QCollection = {QCollection}
               studentName = {studentName} studentComment = {studentComment} studentLocation = {studentLocation} studentTime = {studentTime}
                setQCollection = {setQCollection} setName = {setName} setComment = {setComment} setLocation = {setLocation} setTime = {setTime}/>

              <StudentList QCollection = {QCollection} setQCollection = {setQCollection} setAnswered = {setAnswered} item = {item}/>
              </li>
            ))
          }
        </ul>
      </div>
        
      
    </>
  )
}

export default App
