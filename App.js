import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Project from "./Project";
function App() {
  return (
  <Router>
    <Routes>
    <Route path="/" element={<Project />}/>
    </Routes>
  </Router>
  );
}

export default App;
