const MainButton = ({ content }) => {
    return (
        <button onClick={() => { window.location.reload(); }} className="mainbtn">
            {content}
        </button>
    )
}

export default MainButton;