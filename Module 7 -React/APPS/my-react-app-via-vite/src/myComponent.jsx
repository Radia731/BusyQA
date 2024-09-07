function MyComponent(){
 const handleClick = () => alert('hello, React')
    return (
    <div>
        <h2>Hello, React!</h2>
    <button onClick={handleClick}>Click Me</button>
    </div>
    )
   
}
export default MyComponent;