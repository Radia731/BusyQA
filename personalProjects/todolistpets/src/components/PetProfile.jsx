import TodoList from "./TodoList.jsx"
import { useEffect, useState } from "react";
import PetGeneralInfo from "./GeneralInfo.jsx"
import SideBar from "./Sidebar.jsx"
import {PET_IMG, PET_INFO } from "./petData.jsx";



function Petprofile({petType}) {

    const [ showSideBar , setShowSideBar] = useState(false) 

     const sideBarControl =() => {
  
         setShowSideBar(!showSideBar)

    }
    
    const { name, age, breed, weight } = PET_INFO[petType];



    return (
        <>
                <div className="PetSidebarImgContainer">
                    <div className="PetProfilePic"
                    onClick={ sideBarControl }>
                            <img src={PET_IMG[petType]} alt={name}/>
                    </div>
                
                  </div>

                 {showSideBar &&( < SideBar
                  sideBarControl ={sideBarControl}
                  name = {name}
                  age={age}
                  breed={breed}
                  weight={weight}
                  />)}

                <TodoList />
            

        </>
    )
 
}

export default Petprofile