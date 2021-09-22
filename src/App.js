import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./app/header/Header";
import Layout from "./components/layout/Layout"

function App() {
    return (
        <Router>
            <Header />
            <Layout />
        </Router>
    );
}

export default App;
