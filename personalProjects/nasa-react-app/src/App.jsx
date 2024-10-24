import {useState, useEffect} from 'react'
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false);
  
  function handleToggleModal(){  //created this function to control the switch basically! and set a new value to our state 
    setShowModal(!showModal)
  }
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY =import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key={NASA_KEY}`

      try {
       const res = await fetch(url) 
       const data = await res.json()
       console.log('DATA/n',data)
      } catch (err) {
        console.log(err.message)
        
      }
      
    }
    fetchAPIData();
  },[])
  return (
    <>
      <Main/>
      {showModal && //conditionally rendering the showModal value and making the side bar dependent on it - If showModal is true, then the code after the && gets executed (which means the sidebar shows up)
      (<SideBar handleToggleModal={handleToggleModal}/>)
      }
      <Footer handleToggleModal={handleToggleModal}/>  
      
    </>
  )
}

export default App
