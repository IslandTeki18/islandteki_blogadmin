import React from "react";
import "./TopBar.scss";

const TopBar = () => {
    function topBarBrand() {
        return (
            <div className="topBarBrand">
                <button className="btn btn-primary mr-2">menu</button>
                <a href="/dashboard">Blog Admin</a>
            </div>
        );
    }
    function topBarSearch() {
        return (
            <div className="topBarItem full-search">
                <div class="input-group mb-3 d-flex align-items-center">
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon1"
                    >
                        Button
                    </button>
                    <input
                        type="text"
                        class="form-control"
                        placeholder=""
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                    />
                </div>
            </div>
        );
    }
    function topBarControl() {
        return (
            <div className="topBarItem control-right">
                <ul className="nav header-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="!#"
                            id="navbarDarkDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-chart-bar control-icon" />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-dark"
                            aria-labelledby="navbarDarkDropdownMenuLink"
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
                    </li>
                </ul>
            </div>
        );
    }
    return (
        <div className="dkTopBar bg-dark text-white">
            {topBarBrand()}
            {topBarSearch()}
            {topBarControl()}
        </div>
    );
};

export default TopBar;
