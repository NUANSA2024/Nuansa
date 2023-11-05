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
import Combined from "./pages/Combined";
import NuansaTicketing from "./pages/NuansaTicketing";
import NuansaMerch from "./pages/NuansaMerch";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Combined />} />
          <Route path="/NuansaTicketing" element={<NuansaTicketing />} />
          <Route path="/NuansaMerch" element={<NuansaMerch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
