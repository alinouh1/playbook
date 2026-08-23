import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  if (!authed) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-paper">
      <Sidebar />
      <main className="mr-[280px] flex-1">
        <Home />
      </main>
    </div>
  );
}
