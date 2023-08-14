import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
