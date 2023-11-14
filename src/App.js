import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Sign from "./components/Sign/Sign";
export const MyContex = React.createContext();
export const MyContex1 = React.createContext();
function App() {
  const [alert, setAlert] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const handleChange = (name, email, pass) => {
    if (name && email && pass !== "") {
      const newUser =  { name: name, email: email, pass: pass };
      setUser(newUser);
      navigate("/sign");
      localStorage.setItem("name",newUser.name)
    } else {
      setAlert("fill all the fields");
    }
  };
  const [details, setDetails] = useState("");
  const [sdetails, setSdetails] = useState({});
  const handleSign = (email, pass) => {
    if (user.email === email && user.pass === pass) {
      const d = { email: email, pass: pass };
      setSdetails(d);
      navigate("/");
    } else {
      setDetails("please enter valid details");
    }
  };
  return (
    <div className="App">
      <MyContex1.Provider value={sdetails}>
        <MyContex.Provider value={user}>
          <Navbar />
          <Routes>
            <Route
              path="/login"
              element={<Login handleChange={handleChange} alert={alert} />}
            />
            <Route
              path="/sign"
              element={<Sign details={details} handleSign={handleSign} />}
            />
            <Route path="/" exat element={<Home setSdetails={setSdetails} />} />
          </Routes>
        </MyContex.Provider>
      </MyContex1.Provider>
    </div>
  );
}

export default App;
