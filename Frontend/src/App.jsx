import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always visible */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow p-4 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
