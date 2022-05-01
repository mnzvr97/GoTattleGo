import "./Sidebar.scss"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">Mohammad Mansur Ali Khan</h2>
        </div>

        <img src={pc} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph">Full Stack Developer</p>
    </div>;
}

export default Sidebar;