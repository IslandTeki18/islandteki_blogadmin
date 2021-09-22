import React from "react";
import "./DashboardView.scss";
import OverviewCard from "../../components/overviewCards/OverviewCards";

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
    return (
        <div className="dkDashboardView">
            <div className="container">
                {renderWelcomeHeaderRow()}
                {renderOverviewCardsRow()}
                {/* Blog Post Row */}
            </div>
        </div>
    );
};

export default DashboardView;
