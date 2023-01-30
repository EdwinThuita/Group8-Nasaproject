import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/login";
import User from "./Components/User/user";

function App() {
  const [user, setUser] = useState(null);

  const logout = () => {
    setUser(null);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="user" />} />
        <Route path="user/*" element={<User user={user} logout={logout} />} />
        <Route path="login" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
