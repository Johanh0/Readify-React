// Import React Functionalities
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Auth from "./pages/Auth";

export const Context = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });
  const [signedIn, setSignedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("signedIn")) || false;
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });
  return (
    <Context.Provider
      value={{ darkMode, setDarkMode, signedIn, setSignedIn, user, setUser }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
