import {useState}  from 'react';
 
 const SearchPanel = (props) => {

 const[ searchText, setSearchText] = useState('');

      const handleClick =()=> {
        props.searchCallback(searchText)
         }
      const handleSelectChange =()=> {  
              alert('select Change')
         }
      const handleKeyDown = (e) =>{  
          if (e.keyCode === 13){
            // alert('enter key pressed === performed a search') 
          
             props.searchCallback(searchText)  

          }

         }
       const handleOnChange = (e) => {
        //update search text state
        setSearchText(e.target.value)
       } 
    
    return  <>
         <input
          onKeyDown={handleKeyDown}
          onChange={handleOnChange}
          type="text" 
          placeholder="Search Cryptocurrency" 
          value={searchText} />
            <select onChange={handleSelectChange}>
                <option value="market_cap">Market Cap</option>
                <option value="current_price">Price</option>
                <option value="total_volume">24h Volume</option>
                <option value="price_change_percentage_24h">24h Change</option>
            </select>
          <button onClick={handleClick}>Search</button>  
            
    </>
    

  }

export default SearchPanel;