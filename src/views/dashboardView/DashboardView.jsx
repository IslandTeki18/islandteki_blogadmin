import React from "react";
import "./DashboardView.scss";
import OverviewCard from "../../components/overviewCards/OverviewCards";
import DashboardCard from "../../components/dashboardCard/DashboardCard";
import Table from "../../components/table/Table"

import {DUMMY_DATA} from "../../utils/dummyData"

const DashboardView = () => {
    function renderWelcomeHeaderRow() {
        return (
            <div className="row py-3">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body d-flex justify-content-between">
                            <h1>Welcome back, Landon!</h1>
                            <h3>Recent Items</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function renderOverviewCardsRow() {
        return (
            <div className="row">
                <div className="col-3">
                    <OverviewCard
                        title="Overview Card"
                        subTitle="This is just a test"
                    />
                </div>
                <div className="col-3">
                    <OverviewCard
                        title="Overview Card"
                        subTitle="This is just a test"
                    />
                </div>
                <div className="col-3">
                    <OverviewCard
                        title="Overview Card"
                        subTitle="This is just a test"
                    />
                </div>
                <div className="col-3">
                    <OverviewCard
                        title="Overview Card"
                        subTitle="This is just a test"
                    />
                </div>
            </div>
        );
    }

    function renderDashboardCards() {
        return (
            <div className="row py-3">
                <div className="col-6">
                    <DashboardCard title="Recent Posts">
                        <Table data={DUMMY_DATA} />
                    </DashboardCard>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12">
                            <DashboardCard title="Popular Posts" />
                        </div>
                        <div className="col-12 pt-3">
                            <DashboardCard title="New Users" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="dkDashboardView">
            <div className="container">
                {renderWelcomeHeaderRow()}
                {renderOverviewCardsRow()}
                {renderDashboardCards()}
            </div>
        </div>
    );
};

export default DashboardView;
