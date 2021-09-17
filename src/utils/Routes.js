import { Switch, Route } from "react-router-dom";
import LoginView from "../views/loginView/LoginView";
import DashboardView from "../views/dashboardView/DashboardView";
import BlogPostsListView from "../views/blogPostsListView/BlogPostsListView";
import BlogPostDetailsView from "../views/blogPostDetailsView/BlogPostDetailsView";
import BlogPostEditView from "../views/blogPostEditView/BlogPostEditView";
import UserProfileView from "../views/userProfileView/UserProfileView";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginView} />
            <Route path="/dashboard" component={DashboardView} />
            <Route path="/post-list" component={BlogPostsListView} />
            <Route path="/post/:id" component={BlogPostDetailsView} />
            <Route path="/post/:id/edit" component={BlogPostEditView} />
            <Route path="/profile" component={UserProfileView} />
        </Switch>
    );
};

export default Routes;
