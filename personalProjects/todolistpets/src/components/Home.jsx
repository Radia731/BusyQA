import { Link } from 'react-router-dom'
import AddPet from "./AddPets.jsx"

function  Home() {
   
    return(
       
        <div className="WelcomeBg">
        <h1>Rad's Pet Duty!</h1> 

        <div className="pet-card">
                <div className="Dog-card">
                    <Link to="/DOG" >
                    <img src="https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png" alt="dogphoto" />
                     </ Link>
                     <h2> Weston</h2>
                </div>
                <div className="cat-card">
                    <Link to="/CAT">
                     <img src="https://stickershop.line-scdn.net/stickershop/v1/product/23701012/LINEStorePC/main.png?v=1" alt="catphoto" />
                    </ Link>
                    <h2> Aliya</h2>
                </div>
        
            
        </div>
        

        <div>
            
            <Link to ="/ADDPET">
            <button className="addPetbn"> <i class="fa-solid fa-paw"> </i>
            <span>  Add a new Pet </span>

        </button>
        </ Link>
        </div>


        </div>
    )

}

export default Home;