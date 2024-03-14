import { Link, Outlet } from 'react-router-dom';
import { AuthProvider } from "./contexts/auth.jsx";


function App() {

  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default App
