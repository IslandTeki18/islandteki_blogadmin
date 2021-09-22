import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./app/header/Header";
import Sidebar from "./app/sidebar/Sidebar";
import Routes from "./components/routes/Routes";

function App() {
    return (
        <Router>
                <Header />
                <Sidebar />
                <Routes />
        </Router>
    );
}

export default App;
