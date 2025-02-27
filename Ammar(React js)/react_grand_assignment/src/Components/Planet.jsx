import React, { useState } from 'react'

export default function Planet() {
    let planets = [
        {name: "Mercury", size: "4,880 km", distance: "57.9 million km", moons: 0, image:"https://thumbs.dreamstime.com/b/planet-mercury-space-planet-mercury-starry-sky-solar-system-space-image-elements-furnished-nasa-174839978.jpg"},
        { name: "Venus", size: "12,104 km", distance: "108.2 million km", moons: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJZ3zBLKSmyvWPvZVrCLZdAmOMStgMQIBm5Q&s" },
        { name: "Earth", size: "12,742 km", distance: "149.6 million km", moons: 1, image: "https://img.freepik.com/free-psd/earth-ball-planet-isolated_23-2151806121.jpg?semt=ais_hybrid" },
        { name: "Mars", size: "6,779 km", distance: "227.9 million km", moons: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW55Vjpuox9zNJ4Y2V08GWzXy0NiSLZPRJcg&s" },
        { name: "Jupiter", size: "139,820 km", distance: "778.5 million km", moons: 79, image: "https://cdn.britannica.com/66/155966-131-17B5B518/Jupiter.jpg" },
        { name: "Saturn", size: "116,460 km", distance: "1.43 billion km", moons: 83, image: "https://t3.ftcdn.net/jpg/02/50/12/16/360_F_250121615_gE08WKNh7GUBR6SD14m5YaXf3Fc5ztTV.jpg" },
        { name: "Uranus", size: "50,724 km", distance: "2.87 billion km", moons: 27, image: "https://media.istockphoto.com/id/1199283538/photo/planet-uranus.jpg?s=612x612&w=0&k=20&c=ywhCXwqp1G17DDGvSN4FoFHcBr24W__TjulMRju4ZWk=" },
        { name: "Neptune", size: "49,244 km", distance: "4.5 billion km", moons: 14, image: "https://cdn.mos.cms.futurecdn.net/PezBzd9Fehsq9XWgWMauVV.jpg" }

        
    ]
    
  return (
    <div class='container-fluid'>
      <h1>Planets Information</h1>
      {planets.map((p)=>(
      <table className='table table-hover'>
        
          <thead className='table-info'>
            <tr>
              <th>Planet Name</th>
              <th>Planet Size</th>
              <th>Distance From sun</th>
              <th>Number Of Moons</th>
              <th>Planet Image</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p.name}</td>
              <td>{p.size}</td>
              <td>{p.distance}</td>
              <td>{p.moons}</td>
              <td><img src={p.image} alt="Planet image" width="100" height ="100" /></td>
            </tr>
          </tbody>
      </table>
      
    ))}
    </div>
  )
}