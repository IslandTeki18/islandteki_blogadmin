import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import DashboardPage from "../pages/dashboardPage/DashboardPage";
import BlogPostsListPage from "../pages/blogPostsListPage/BlogPostsListPage";
import BlogPostDetailsPage from "../pages/blogPostDetailsPage/BlogPostDetailsPage";
import BlogPostEditPage from "../pages/blogPostEditPage/BlogPostEditPage";
import UserProfilePage from "../pages/userProfilePage/UserProfilePage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/post-list" component={BlogPostsListPage} />
            <Route path="/post/:id" component={BlogPostDetailsPage} />
            <Route path="/post/:id/edit" component={BlogPostEditPage} />
            <Route path="/profile" component={UserProfilePage} />
        </Switch>
    );
};

export default Routes;
