import {useState, useEffect} from 'react'
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  function handleToggleModal(){  //created this function to control the switch basically! and set a new value to our state 
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY =import.meta.env.VITE_NASA_API_KEY
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      const cachedData= localStorage.getItem(localKey)

      if (cachedData) {
        try {
          const apiData = JSON.parse(cachedData)
          setData(apiData)
          console.log("fetched from cache today")
          return;
          
        } catch (error) {
          console.log("error parsing cached data:", error)
        }
      }
      localStorage.clear()

      try {
       const res = await fetch(url) //sends a GET request to the API end Point
       const apiData = await res.json() // converts the raw response from the api to a JSON object format
       localStorage.setItem(localKey, JSON.stringify(apiData))
       setData(apiData);
       console.log("fetched from api today")
       return
      } catch (err) {
        console.log(err.message) 
      }
    }
    fetchAPIData();
  },[])


  return (
    <>
      {data ? (<Main data ={data} />) : (
        <div className ="loadingState"> 
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}
      {showModal &&  (<SideBar data ={data} handleToggleModal={handleToggleModal}/>)} 

      {data && (<Footer data ={data} handleToggleModal={handleToggleModal}/>  )}
      
    </>
  )
}

export default App

