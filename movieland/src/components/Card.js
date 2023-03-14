import React from "react"
export default function Card(props){
    function imageUrl(){
        const randomNumber = Math.floor(Math.random() * 100); // generate a random number between 0 and 999

        return `https://picsum.photos/200/300?random=${randomNumber}`
    }
    return(

        <div className="card">

        <img src={props.movie.Poster} alt=""/>
        {/* <img src={imageUrl()} alt=""/> */}

        <div className="movie-info">
           <p>{props.movie.Type.toUpperCase()}</p>
           <h3>{props.movie.Title}</h3>
        </div>
    </div>
  )
}
