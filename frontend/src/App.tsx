import Header from "./components/Header";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";
import { useAuth } from "./helper/authcontext";
function App() {
  const auth = useAuth();
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5173/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {auth?.isLoggedIn && auth.user && (
          <Route path="/chat" element={<Chat />} />
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;