import { Link } from 'react-router-dom'

function  Home() {
   
    return(
       
        <div className="WelcomeBg">
        <h1>Rad's Pet Duty!</h1> 

        <div className="pet-card">
                <div className="Dog-card">
                    <Link to="/DOG" >
                    <img src="https://www.pngall.com/wp-content/uploads/10/Pet-PNG-Images.png" alt="mrweston" />
                     </ Link>
                     <h2> Weston</h2>
                </div>
                <div className="cat-card">
                    <Link to="/CAT">
                     <img src="https://stickershop.line-scdn.net/stickershop/v1/product/23701012/LINEStorePC/main.png?v=1" alt="missgowrl" />
                    </ Link>
                    <h2> Aliya</h2>
                </div>
                 <div className="bunny-card">
                     <Link to="/BUNNY" >
                     <img src="https://freepngimg.com/thumb/rabbit/7-2-rabbit-png-picture.png" alt="mrweston"  />
                     </ Link>
                     <h2> Tpain</h2>
                </div>
        
            
        </div>

        </div>
    )

}

export default Home;