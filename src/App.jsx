import "./App.css";
import { Feed } from "./components/Feed/Feed";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" exact element={<Feed />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
