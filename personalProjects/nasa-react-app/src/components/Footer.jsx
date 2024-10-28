function Footer(props) {

const { handleToggleModal, data} = props // prop drilling - By passing the handleToggleModal function as a prop to the Footer, the Footer can communicate back up to the App component without directly managing any state itself.
    return (
        <footer>
            <div className="bgGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={handleToggleModal}><i className="fa-solid fa-info"></i> 
            </button>
        </footer>
    );
}

export default Footer;
