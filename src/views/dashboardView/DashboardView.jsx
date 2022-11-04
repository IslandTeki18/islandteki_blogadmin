import React from "react";
import "./DashboardView.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import OverviewCard from "../../components/overviewCards/OverviewCards";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import Table from "../../components/table/Table";
import Loader from "../../components/loader/Loader";
import { listPosts } from "../../redux/actions/post.actions";

const DashboardView = () => {
  const dispatch = useDispatch();
  return (
    <div className="dkDashboardView">
      <div className="container-fluid">
        <Row className="py-4">
          <Col md={3}>
            <DashboardCard title="Recent Posts">

            </DashboardCard>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DashboardView;
