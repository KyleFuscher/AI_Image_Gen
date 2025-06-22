import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthButtons from './components/AuthButtons';
import TextToImageGenerator from './components/TextToImageGenerator';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import "@fontsource/poppins";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="text-white font-semibold">
            <h1 className="bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] p-4 text-3xl" style={{ fontFamily: 'Poppins, sans-serif' }}>Art Generator</h1>
            <AuthButtons />
          </header>
          <main className="p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/text-to-image"
                element={
                  <ProtectedRoute>
                    <TextToImageGenerator />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </main>
          <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-white-500 p-4 text-white text-center relative w-full top-[22rem]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <p>© 2025 Text to Image AI-KyleFuscher</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" replace />;
}

export default App;
