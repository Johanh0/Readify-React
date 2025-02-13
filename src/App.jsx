// Import React Functionalities
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import Pages
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

export const Context = createContext();

function App() {
  const [signedIn, setSignedIn] = useState(() => {
    return JSON.parse(localStorage.getItem("signedIn")) || false;
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const [searchResult, setSearchResult] = useState([]);
  return (
    <Context.Provider
      value={{
        signedIn,
        setSignedIn,
        user,
        setUser,
        searchResult,
        setSearchResult,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
}

export default App;
