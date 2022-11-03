import React from "react";
import { Header } from "../../app/header";
import { Sidebar } from "../../app/sidebar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DashboardView from "../../views/dashboardView/DashboardView";
import { PrivateRoute } from "../privateRoute/PrivateRoute";

const Routes = () => {
  return (
    <React.Fragment>
      <Container fluid className="g-0">
        <Row className="g-0">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <Header />
            <PrivateRoute path="/dashboard">
              <DashboardView />
            </PrivateRoute>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Routes;
