import React from "react";
import { Header } from "../../app/header";
import DashboardView from "../../views/dashboardView/DashboardView";
import { PrivateRoute } from "../privateRoute/PrivateRoute";

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <PrivateRoute path="/dashboard">
        <DashboardView />
      </PrivateRoute>
    </React.Fragment>
  );
};

export default Routes;
