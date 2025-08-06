// App.jsx
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import ProductsSelection from './components/products-selection'
import AddOns from './components/Add-ons';
import Meal from './components/Meal';
import './App.css';

function App() {
  return (
    
    
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products-selection" element={<ProductsSelection />} />
      <Route path="/Add-ons" element={<AddOns />} />
      <Route path="/Meal" element={<Meal />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
