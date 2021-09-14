import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sidebar from "./app/sidebar/Sidebar";
import Routes from "./utils/Routes";
import Header from "./app/header/Header";
import Footer from "./app/footer/Footer";

function App() {
    return (
        <div className="app">
            <Header />
            <Container fluid>
                <Router>
                    <Row className="no-gutters">
                        <Col md={3} className="px-0">
                            <Sidebar />
                        </Col>
                        <Col md={9}>
                            <Routes />
                        </Col>
                    </Row>
                </Router>
            </Container>
            <Footer />
        </div>
    );
}

export default App;
