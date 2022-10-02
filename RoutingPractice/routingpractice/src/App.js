import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Params from './components/Params';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Routing Practice</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<Params />} />
          <Route path="/:word/:color/:bgColor" element={<Params />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;