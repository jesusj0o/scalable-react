import './App.css';
import Login from './components/auth/Login';
import Sidebar from './components/shared/sidebar';
import Dasboard from './components/pages/dashboard';
function App() {
  return (
    <div className="App">
       <Login/> 
        {/* <div className='grid'>
          <div className='sidebar-conatiner'>
            <Sidebar/>  
          </div>
          <div className='main-container'>
              <Dasboard/>
          </div>
        </div> */}
    </div>
  );
}

export default App;
