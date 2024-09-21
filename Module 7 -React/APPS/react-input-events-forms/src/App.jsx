import react, {useState} from 'react';

function App() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleInputChange = (e) => {
  const { name , value } = e.target;
  if (name === 'name' ) {
    setName(value);
  } else if (name === 'email') {

    setEmail(value);
  }

  };

const handleSubmit = (e) => {
  e.preventDefault();
  alert(`Name: ${name}\nEmail: ${email}`);
}

  return (


    <div className="App">
   <h1> React Input Events and Forms</h1>
   <form onSubmit={handleSubmit}> 
    <label> 
      Name: <input
      type="Text"
      name="name"
      value={name}
      onChange={handleInputChange}/> 
    </label>
    <br />
    <label>Email:
    <input 
    
    type="email"
    name="email"
    value={email}
    onChange={handleInputChange}
    
    
    />

    </label>
    <button type="submit">Submit</button>
   </form>
   <p>name: {name}</p>
   <p>Email: {email}</p>
    </div>
  )
}

export default App
