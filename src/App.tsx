import React from "react";
import "./App.css";
import "./index.css";
import "./fonts.css";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Link,
} from "react-router-dom";
import NUANSA2018 from "./pages/PastNUANSA/NUANSA2018";
import Combined from "./pages/Combined";
function App() {
  return (
    <div className="App">
      <head>
        <title>NUANSA 2024</title>
      </head>
      <BrowserRouter>
        <Routes>
          <Route index element={<Combined />} />
          <Route path="/NUANSA2018" element={<NUANSA2018 />} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
