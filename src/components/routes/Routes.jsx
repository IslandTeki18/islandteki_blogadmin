import React from "react";
import "./Routes.scss";
import { Switch, Route } from "react-router-dom";
import DashboardView from "../../views/dashboardView/DashboardView";
import LoginView from "../../views/loginView/LoginView";
import UserProfileView from "../../views/userProfileView/UserProfileView";
import BlogPostListView from "../../views/blogPostsListView/BlogPostsListView";

const Routes = () => {
    return (
        <div className="dkRoutes">
            <Switch>
                <Route path="/dashboard" exact component={DashboardView} />
                <Route path="/login" component={LoginView} />
                <Route path="/profile" component={UserProfileView} />
                <Route path="/posts" component={BlogPostListView} />
            </Switch>
        </div>
    );
};

export default Routes;
