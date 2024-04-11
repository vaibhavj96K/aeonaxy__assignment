import "./App.css";
import Home from "./pages/Home";
import Personal from "./components/Personal";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/personal" element={<Personal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
