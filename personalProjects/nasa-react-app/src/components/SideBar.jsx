function SideBar(props) {
    const { handleToggleModal } = props
    return (
        <div className="sideBar"> 
        <div onClick={ handleToggleModal }
        className="bgOverlay"></div>

        <div className="sidebarContents"> 
            <h2>The Brutal Martian Landscape</h2>
            <div >
                <p>Description</p>
                <p>yurrrrrr</p>
            </div>

            <button onClick={handleToggleModal}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
            </div>
        </div>
    );
}

export default SideBar;
