import './App.css';
import ResponsiveAppBar from './Pages/ResponsiveAppBar/ResponsiveAppBar';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import AddFood from './Pages/AddFood/AddFood';
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
          <Route path="/cart" element={<Cart />} >
          </Route>
          <Route path="/addFood" element={<AddFood />} >
          </Route>

        </Routes>
      </Router>

    </div>
  );
}

export default App;
