import React, { useEffect, useState } from "react";

function Fetch() {

    // Initialize state to hold the charactors
    const [data, setData] = useState([]);
  
    // declare async func inside the effect then call it
    useEffect(() => {
      async function fetchData() {
        //call fetch
        const res = await fetch("https://rickandmortyapi.com/api/character");
  
        //pull out data
        const json = await res.json();
  
        //save results into state
        setData(json.results.map(c => { 
          return{
          "id": c.id,
          "characterImage": c.image,
          "name": c.name, 
          "gender": c.gender, 
          "species": c.species,
          "characterStatus": c.status 
          }}
        ));
      }
  
      fetchData();
    }, []);
  
    return (
      data.map(character =>(
        <div id="card">
            <img id ="characterImage" src = {character.characterImage} alt="image of character"/>
            <ul>
                <li>{character.name}</li>
                <li>{character.gender}</li>
                <li>{character.species}</li>
                <li>{character.characterStatus}</li>
            </ul>
        </div>
      ))
  );
  }
  
  export default Fetch;
  