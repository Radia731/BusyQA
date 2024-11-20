import { Link,  useLocation} from 'react-router-dom'
import {  useEffect, useState} from "react";
import AddPet from "./AddPets.jsx"
import {PET_IMG, PET_INFO } from "./petData.jsx";

function  Home() {

     const location =  useLocation();

    const petType = Object.keys(PET_INFO) 
    //initialPet is the combined petdata object
    const initialPet = petType.map( (petType) => ({ 
        name: PET_INFO[petType].name,
        age: PET_INFO[petType].age,
        gender: PET_INFO[petType].gender,
        breed: PET_INFO[petType].breed,
        weight: PET_INFO[petType].weight,
        petType,
        petIMG: PET_IMG[petType]
        
    }));
    
    const[ pets, setPets ] = useState(initialPet)
 


     
    useEffect(() => {
        if(location.state && location.state.newPet) {
            console.log("Adding new pet:", location.state.newPet)
            setPets((prevPets)  => {
              return   [...prevPets, location.state.newPet]
              navigate(location.pathname, { replace: true, state: {} })
            })

        }
        console.log("Component re-rendered with pets:", pets);
    }, [location.state]) 

  
    return(
       
        <div className="WelcomeBg">
        <h1>Rad's Pet Duty!</h1> 

        <div className="pet-card">
            {pets.map((pet, index) =>  
                <div className="Dog-card">
                    <Link to="/DOG" >
                    <img src={pet.petIMG.preview || pet.petIMG} alt={`${pet.name} photo`} />
                     </ Link>
                     <h2>{pet.name}</h2>
                </div>
                     )}
                
        
            
        </div>
        

        <div>

            <Link to ="/ADDPET">
                 <button className="addPetbn"> <i className="fa-solid fa-paw"> </i>
                    <span>  Add a new Pet </span>
               </button>
             </ Link>

        </div>


        </div>
    )

}

export default Home;


