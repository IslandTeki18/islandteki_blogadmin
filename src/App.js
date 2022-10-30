import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import Header from "./app/header/Header";
import LoginView from "./views/loginView/LoginView";

function App() {
  return (
    <main>
      <Switch>
        <Route index path="/">
          <LoginView />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
