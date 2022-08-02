import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';

import './App.css'
import './responsive.css'
import DirectorMsg from './Components/DirectorMsg';

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <DirectorMsg/>
    </>
  );
}

export default App;
