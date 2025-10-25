import React from 'react'
import { Navigate } from 'react-router-dom'
import { authApi } from '../api/auth'

const ProtectedRoute = ({ children }) => {
  // Kullanıcı login olmuş mu kontrol et
  if (!authApi.isAuthenticated()) {
    // Login olmamışsa login sayfasına yönlendir
    return <Navigate to="/login" replace />
  }

  // Login olmuşsa sayfayı göster
  return children
}

export default ProtectedRoute

