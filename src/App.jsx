import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  const [authed, setAuthed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  };

  if (!authed) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="flex min-h-screen bg-paper" dir="rtl">
      {/* Mobile Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-30 p-2 bg-white rounded-md shadow-md text-ink"
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu size={24} />
      </button>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/30 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      
      <main className="w-full md:mr-[280px] flex-1">
        <Home />
      </main>
    </div>
  );
}
