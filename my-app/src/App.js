import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Signup from './pages/Signup'

function App() {
  return (
    <div className="App">
      {/* Add Router for pages */}
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;