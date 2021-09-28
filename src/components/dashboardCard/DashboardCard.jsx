import React from "react";
import "./DashboardCard.scss";
import PropTypes from "prop-types";

const DashboardCard = (props) => {
    return (
        <div className="dkDashboardCard card">
            <div className="card-body">
                <div className="row">
                    <div className="col-6 align-items-center">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="col-6 text-end">
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-v v" />
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Create
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Edit
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Remove
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">{props.children}</div>
                </div>
            </div>
        </div>
    );
};

DashboardCard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.elementType,
};

export default DashboardCard;
