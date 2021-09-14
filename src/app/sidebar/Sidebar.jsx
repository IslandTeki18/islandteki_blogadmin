import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarItems } from "../../utils/sidebarItems/SidebarItems";

const Sidebar = ({ history, location, defaultActive }) => {
    const lastActiveIndexString = history.location.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(
        lastActiveIndex || Number(defaultActive)
    );
    function changeActiveIndex(newIdx) {
        localStorage.setItem("lastActiveindex", newIdx);
        setActiveIndex(newIdx);
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") return "/" + path;
        return path;
    }

    useEffect(() => {
        const activeItem = SidebarItems.findIndex(
            (item) => getPath(item.route) === getPath(location.pathname)
        );
        changeActiveIndex(activeItem);
    }, [location]);
    return (
        <Nav className="flex-column dkSidebar" variant="pills" navbar={true}>
            {SidebarItems.map((item, idx) => (
                <Nav.Link key={item.name} active={idx === activeIndex}>
                    <Link to={item.route}>{item.name}</Link>
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default Sidebar;
