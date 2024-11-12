import {useEffect, useState } from "react";

function PetGeneralInfo( {name, age, breed, weight}) {




    return (
        <>
        <div className="sidebarbg">

          <h1> GENERAL INFO</h1>
        <ul>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
            <p>Weight: {weight}</p>
          </ul>

        </div>
        </>
    )
 
}

export default PetGeneralInfo