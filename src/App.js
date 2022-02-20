import './App.css';
import ResponsiveAppBar from './Pages/ResponsiveAppBar/ResponsiveAppBar';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/food/:foodId" element={<FoodDetails />} >
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
