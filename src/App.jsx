import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AnimatedPage from './components/AnimatedPage';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Admin from './pages/Admin';
import './App.css';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/blog"
          element={
            <AnimatedPage>
              <BlogIndex />
            </AnimatedPage>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <AnimatedPage>
              <BlogPost />
            </AnimatedPage>
          }
        />
        <Route
          path="/login"
          element={
            <AnimatedPage>
              <Login />
            </AnimatedPage>
          }
        />
        <Route
          path="/admin"
          element={
            <AnimatedPage>
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter basename="/dynamic-routing/">
      <AuthProvider>
        <Navbar />
        <main>
          <AppRoutes />
        </main>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
