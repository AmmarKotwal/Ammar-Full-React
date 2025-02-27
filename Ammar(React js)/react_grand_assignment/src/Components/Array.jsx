import React from 'react'

export default function Array() {
    let react = ["Variables", "Cards", "State", "Events", "Array", "Props", "Form-Control", "Map"];
    let array_of_obj = [
        {name: "John-Wick", movie_budg: 1000, hero: "Keanu Reeves", poster_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBpy77pycGPaRKYg54d7eN8TYQYO7zAUVAYQ&s"},
        {name: "The Witcher", movie_budg: 2000, hero: "Henry Cavill", poster_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgqUXLvv3weybflVhcZZ7TNYCSJfAS36U0w&s"},
        {name: "The Matrix", movie_budg: 3000, hero: "The Rock", poster_img: "https://fiu-original.b-cdn.net/fontsinuse.com/use-images/170/170601/170601.jpeg?filename=TheMatrix_USOneSheet_ConceptArts_Web.jpg"},
        {name: "End Game", movie_budg: 4000, hero: "Tony Starck", poster_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNW93DjZ3GTnSHUhYx99MbZqqaRKtIDzdrtQ&s"},
        {name: "Jumanji Welcome To The Jungle", movie_budg: 5000, hero: "Dwayne Johnson", poster_img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT2TBH3woST9gavue1tlobm5VutaLBkKVX1RIuista352UA981zksnKSMrw6wvrONnsSDTIk2vOKDLMZUNXbwB-TyI6EhyOMHYQuerg3Q"},
    ]
  return (
    <div>
        <h1>Array</h1>
        <br />
        {react.map((a)=>(
            <li>
                {a}
            </li>            
        ))}
        <br />
        <br />
        <br />
        <h1>Array Of Objects</h1>
        <br />
        <div className="container">
            <div className="row">
        {array_of_obj.map((a)=>(
                    <div className="col-md-6 my-3">
                        <div className="card">
                            <img src={a.poster_img} className="card-img-top" alt="..." height="350px" />
                            <div className="card-body">
                                <h5 className="card-title">{a.name}</h5>
                                <p className="card-text">Movie Budget: {a.movie_budg}</p>
                                <p className="card-text">Hero: {a.hero}</p>
                        </div>
                        </div>
                    </div>
        ))}
        </div>
        </div>
    </div>
  )
}
