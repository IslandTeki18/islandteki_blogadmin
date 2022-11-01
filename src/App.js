import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Routes from "./components/routes/Routes";
import LoginView from "./views/loginView/LoginView";
import { useEffect } from "react";

function App() {
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo, history]);
  return (
    <main>
      <Switch>
        <Route path="/login">
          <LoginView />
        </Route>
        <Routes />
      </Switch>
    </main>
  );
}

export default App;
