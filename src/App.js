import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./app/header/Header"


function App() {
    return (
        <Router>
            <Header />
        </Router>
    );
}

export default App;
