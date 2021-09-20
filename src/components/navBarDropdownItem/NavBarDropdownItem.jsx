import React from "react";
import "./NavBarDropdownItem.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"

const NavBarDropdownItem = (props) => {
    return (
        <div className="dkNavBarDropdownItem">
            <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className={`fas fa-${props.icon}`} style={{fontSize: `${props.fontSize}`, color: `${props.color}`}} />
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {props.navItems.map((item, idx) => (
                    <li key={idx}>
                        <Link className="dropdown-item" to={item.route}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


NavBarDropdownItem.propTypes = {
    icon: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    navItems: PropTypes.array.isRequired,
    color: PropTypes.string,
}

export default NavBarDropdownItem;
