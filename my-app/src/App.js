import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Signup from './pages/Signup/Signup'
import IntroPage from './pages/Introduce/Introduce'
import News from './pages/New/New'


function App() {
  return (
    <div className="App">
      {/* Add Router for pages */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        <Routes>
          <Route path="/intro" element={<IntroPage/>} />
        </Routes>
        <Routes>
          <Route path="/new" element={<News/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;