import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';

/**
 * App Component
 * This is the root component where we define our application's routes.
 * We use React Router to handle navigation between different pages.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Sign-up Page Route */}
        <Route path="/signup" element={<SignUpPage />} />
        
        {/* 
           Additional routes like /login, /admin, /dashboard 
           will be added here as we develop them.
        */}
      </Routes>
    </Router>
  )
}

export default App
