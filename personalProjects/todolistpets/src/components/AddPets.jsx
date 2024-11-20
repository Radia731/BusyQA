import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddPet() {

    const [ name, setName] = useState("")
    const [ petType, setPetType] = useState("")
    const [ petIMG, setPetIMG] = useState({preview: "", raw: ""})
    const [ gender, setGender] = useState("")
    const navigate = useNavigate() // to return back to the home page after we add a new pets
    
    
 const handleImgFile =(e)=> {
     if(e.target.files.length){
         setPetIMG({
             preview: URL.createObjectURL(e.target.files[0]),
             raw: e.target.files[0]
         })
     }

 }
    
    const  handleInputFeild = (e) => {
        
        e.preventDefault ()


        
        const newPet = { name, gender, petType, petIMG } 

        
        setName("");
        setGender("");
        setPetType("");
        setPetIMG("");
        
        navigate("/", {state: { newPet }}) // passing the new petPet as a state via the navigation hook
        
    }
    

    return(

  <>

     <div className="addpetContainer">
        <h1> Add new a pet</h1>

        <div>
            <form onSubmit={handleInputFeild} >

                <div>

                    <label htmlFor="name" 
                    value="addName"> Name </label>
                    <input 
                    type="text"  
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>

                </div>

                <div>
                    <label htmlFor="petType"> petType </label>
                    <input list="PetTypes"
                    placeholder="select your pet type" 
                    value= {petType} 
                    onChange={(e) => setPetType(e.target.value)} />

                            <datalist id="PetTypes">
                                <option value="Dog"></option>
                                <option value="Cat"></option>
                                <option value="Bunny"></option>
                                <option value="Bird"></option>
                                <option value="Fish"></option>
                                <option value="Reptile"></option>
                            </datalist>
                            
                </div>

                <div>
                            <legend>Gender</legend>
                            
                            <input 
                            type="radio" 
                            id="male" 
                            name="gender"
                            value="male" 
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}/>
                            <label htmlFor="male">Male</label>

                            <input 
                            type="radio"
                            id="female"
                            name="gender" 
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}/>
                            <label htmlFor="female">Female</label>
                        
                </div>
                <div>

                    <label htmlFor="petphoto"> add a photo</label>
                    <input 
                    type="file"
                    placeholder="Enter your fav img of your fur baby"
                    accept="image/png, image/jpeg" 
                    onChange={handleImgFile} />
                   
                   
                    <button >
                        Add
                    </button>

                </div>
                

                
    

            </form>

        </div>

        </div>

</> 
    )
}

export default AddPet


