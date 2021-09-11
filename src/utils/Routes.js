import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={LoginPage} />
            </Switch>
        </Router>
    );
};

export default Routes;
