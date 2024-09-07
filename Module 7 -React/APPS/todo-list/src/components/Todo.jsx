function Todo(){
    return(
       <> <div>
            <h1 style={{textAlign:'center', color: 'Darkblue'}}>My To-Do List</h1>
        </div>
        <div>
            <input type="text" placeholder="Add a new task" style={{padding: '5px', center: 'textAlign'}} />
            <button style={{backgroundColor: 'darkblue', color: 'white', padding:'5px 10px', border: 'none', marginLeft: '5px'}}> Add</button>
        <ul style={{listStyleType:'circle', paddingLeft:'20px'}}>
            Home-Work
            </ul>
        <ul style={{listStyleType:'circle', paddingLeft:'20px'}}>
            laundary
            </ul>
        <ul style={{listStyleType:'circle', paddingLeft:'20px'}}>
            Baking
            </ul>
        <ul style={{listStyleType:'circle', paddingLeft:'20px'}}>
            Brunch
            </ul>
        
        </div> </>
    )
}
export default Todo