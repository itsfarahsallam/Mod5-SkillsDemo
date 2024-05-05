import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Institution from './Institution.jsx'

let institutions =
{
  universities :
  [
        {
          name: "California Polytechnic State University - San Luis Obispo (Cal Poly SLO)",
          attendance: "September 2016 - June 2020",
          study: "BA in English Literature",
          description:"A public university in San Luis Obispo; one of the oldest of three polytechnics in the California State University system. This institution is primarily focused on undergraduate education. The academic focus is on combining technical and professional curriculums with the arts and humanities"
        },
  ],
  communityColleges :
  [
        {
          name: "Olympic College",
          attendance: "September 2023 - Present",
          study: "Computer Information Systems",
          description: "A public community college in Bremerton, Washington. It opened as Olympic Junior College on September 5, 1946. Olympic College serves Kitsap and Mason counties in Washington. The college's service area contains two major naval installations: Naval Base Kitsap and Naval Hospital Bremerton.",
        },
        {
          name: "Saddleback College",
          attendance: "January 2021 - June 2023",
          study: "Associates in Health Science",
          description: "A public community college in Mission Viejo, California. It is part of the California Community College system and awards over 300 associate degrees, academic certificates, and occupational skills awards in 190 programs. Established in 1968, Saddleback is the oldest and southernmost institution governed by the South Orange County Community College District. Saddleback College is named for the saddle between the twin peaks of Santiago Peak and Modjeska Peak in the Cleveland National Forest.",
        },
  ],
  highSchool :
  [
        {
          name: "Folsom High School",
          attendance: "August 2012 - May 2016",
          study: "High School Diploma",
          description: "A public secondary school in the western United States, located in Folsom, California, a suburb east of Sacramento. Established 102 years ago in 1922, it is a part of the Folsom Cordova Unified School District.",
        },
  ]
    
}
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <h1>Farah's Educational History</h1>
      <h2>Universities Attended</h2>
      {
          institutions &&
          institutions.universities.map((u)=>{return <Institution key={u.name} name={u.name} attendance={u.attendance} study={u.study} description={u.description}></Institution>})
      }
      <h2>Community Colleges Attended</h2>
      {
          institutions &&
          institutions.communityColleges.map((u)=>{return <Institution key={u.name} name={u.name} attendance={u.attendance} study={u.study} description={u.description}></Institution>})
      }
      <h2>High School Attended</h2>
      {
          institutions &&
          institutions.highSchool.map((u)=>{return <Institution key={u.name} name={u.name} attendance={u.attendance} study={u.study} description={u.description}></Institution>})
      }
  </React.StrictMode>,
)
