import React from "react";
import "./DashboardCard.scss";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

const DashboardCard = (props) => {
  return (
    <div className="dkDashboardCard card">
      <div className="card-body">
        <div className="row">
          <div className="col-6 align-items-center text-white">
            <h4>{props.title}</h4>
          </div>
          <div className="col-6 text-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fas fa-ellipsis-v v" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
