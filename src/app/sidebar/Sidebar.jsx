import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { sideBarItems } from "../../utils/sideBarItems";

const Sidebar = () => {
    return (
        <div className="dkSidebar">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
                <Link
                    to="/"
                    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <i className="fas fa-columns snIcon me-3" />
                    Admin Panel
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    {sideBarItems.map((item, idx) => (
                        <li key={idx} className="nav-item">
                            <Link
                                to={item.route}
                                className="nav-link link-dark"
                            >
                                <i className={`fas ${item.icon} me-3 snIcon`} />
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="dropdown">
                    <a
                        className="btn btn-secondary dropdown-toggle"
                        href="!#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Dropdown link
                    </a>

                    <ul
                        className="dropdown-menu text-small shadow"
                        aria-labelledby="dropdownMenuLink"
                    >
                        <li>
                            <a className="dropdown-item" href="!#">
                                Action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="!#">
                                Another action
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="!#">
                                Something else here
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
