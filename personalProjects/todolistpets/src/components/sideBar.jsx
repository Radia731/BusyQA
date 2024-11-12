import PetGeneralInfo from "./GeneralInfo.jsx"

function SideBar(props){

    const { sideBarControl , showSideBar , name, age, breed, weight} = props

    return (
        <>
           
           <div className="sideBar">
               
               <div className="bgOverlay" onClick={sideBarControl}>
            
                 </div>

                    <div className="sideBarContents">
                       <PetGeneralInfo 
                       name = {name}
                       age={age}
                       breed={breed}
                       weight={weight}
                       />
                      </div>

           </div>
        </>
    )
}
export default SideBar;