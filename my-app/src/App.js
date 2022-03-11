import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Signin from './pages/Signin/Signin'
import Home from './pages/Home/Home'

function App() {
  return (
    <div className="App">
      {/* Add Router for pages */}
      <Router>
        <Routes>
          <Route path="/signin" element={<Signin/>} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
