import ToDoList from "./ToDoList.jsx";
import AuthPage from "./AuthPage.jsx";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState } from "react";

  function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const handleLoginSuccess = () => {
      setIsAuthenticated(true);
    }
  return (
  <div className="App">
    {
      isAuthenticated ? (
        <ToDoList/>
      ):(
        <AuthPage onLoginSuccess={handleLoginSuccess}/>
      )}</div>
    );
}
export default App
