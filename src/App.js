import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import './responsive.css'

import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import DirectorMsg from './Components/DirectorMsg';
import Processes from './Components/Processes';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <DirectorMsg/>
      <Processes/>
      <Footer/>
    </>
  );
}

export default App;
