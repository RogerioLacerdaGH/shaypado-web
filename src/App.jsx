import {Link, Outlet} from 'react-router-dom';
import './App.css';

function App() {

  return (
    <>
      <div>
        <nav>
          <h3>
            <Link to='/'>ICONEDEHOME</Link>
          </h3>
          <h3>
            <Link to='/login'>login</Link>
          </h3>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default App
