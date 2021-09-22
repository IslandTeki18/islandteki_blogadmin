import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import NavBarDropdownItem from "../../components/navBarDropdownItem/NavBarDropdownItem";
import { POSTS } from "../../utils/dropDownLists";

const Header = () => {
    return (
        <header className="dkHeader">
            <div className="px-3 py-3 bg-dark text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <Link
                            to="/"
                            className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
                        >
                            NavBar
                        </Link>
                        <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                            <li>
                                <NavBarDropdownItem
                                    icon="book-open"
                                    fontSize={20}
                                    navItems={POSTS}
                                    color="#fff"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
