import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { sideBarItems } from "../../utils/sideBarItems";

const Sidebar = () => {
    return (
        <Nav className="flex-column dkSidebar" variant="pills" navbar={true}>
            {sideBarItems.map((item) => (
                <Nav.Link key={item.name}>
                    <Link to={item.route}>{item.name}</Link>
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default Sidebar;
