import TodoList from "./TodoList.jsx"
import { useEffect, useState } from "react";
import PetGeneralInfo from "./GeneralInfo.jsx"
import SideBar from "./Sidebar.jsx"
import Petprofile from "./PetProfile.jsx"



function Dogprofile() {
    return (
        <>
    
                 <Petprofile petType="dog" />

        </>
    )
 
}

export default Dogprofile