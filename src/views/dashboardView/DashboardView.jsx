import React from "react";
import "./DashboardView.scss";
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
      <div className="container">
        <h2>Dashboard view</h2>
      </div>
    </div>
  );
};

export default DashboardView;
