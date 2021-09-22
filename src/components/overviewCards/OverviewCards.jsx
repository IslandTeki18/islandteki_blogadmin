import React from "react";
import "./OverviewCards.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const OverviewCards = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.subTitle}
                </h6>
                <p className="card-text">{props.shortdescription}</p>
                <Link to={props.link} className="card-link">
                    Details
                </Link>
            </div>
        </div>
    );
};

OverviewCards.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    shortdescription: PropTypes.string,
    link: PropTypes.string,
};

export default OverviewCards;
