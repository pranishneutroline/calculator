import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/Login";
import Chat from "./components/Chat";
import "./app.css"

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          {" "}
          <Routes>
            <Route exact path="/" element={<AuthProvider />}>
              <Route exact path="/chats" element={<Chat />} />
              <Route exact path="/" element={<Login />} />{" "}
            </Route>
            {/* <Route path="/" element={<Login />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
