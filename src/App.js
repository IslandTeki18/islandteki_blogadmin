import "bootstrap/dist/css/bootstrap.min.css";

import Sidebar from "./app/sidebar/Sidebar";
import Routes from "./utils/routes";

function App() {
    return (
        <div className="app">
            <div>
                <Sidebar />
                <Routes />
            </div>
        </div>
    );
}

export default App;
