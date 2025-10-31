import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './css/base.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import ChangePassword from './pages/ChangePassword'
import Panel from './pages/Panel'
import AdminPanel from './pages/AdminPanel'
import BlogPreview from './pages/BlogPreview'
import Blog from './pages/Blog'

function App() {
  // GitHub Pages için base path, development'ta boş
  const basename = import.meta.env.BASE_URL || '/'

  return (
    <Router>
      <AppShell />
    </Router>
  )
}

function AppShell() {
  const location = useLocation()
  const pathname = location.pathname
  const isPanelRoute = pathname.startsWith('/panel')
  const isAdminRoute = pathname.startsWith('/admin')
  const isChangePasswordRoute = pathname.startsWith('/change-password')
  const hideChrome = isPanelRoute || isAdminRoute || isChangePasswordRoute

  // Sayfa değişiminde en üste kaydır
  React.useEffect(() => {
    // Hash navigasyonunda (/#anchor) tarayıcının default davranışını bozmayalım
    if (!location.hash) {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      {!hideChrome && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route 
            path="/change-password" 
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/panel" 
            element={
              <ProtectedRoute>
                <Panel />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/:siteId" 
            element={
              <ProtectedRoute>
                <AdminPanel />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/:siteId/blog" 
            element={
              <ProtectedRoute>
                <BlogPreview />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>
      {!hideChrome && <Footer />}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
