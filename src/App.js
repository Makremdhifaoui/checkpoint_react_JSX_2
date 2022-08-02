import './App.css';
import Profilephoto from './Component/Profile/Profilephoto';
import FullName from './Component/Profile/FullName';
import Adresse from './Component/Profile/Adresse';




function App() {
  return (
    <div className="App">
     <Profilephoto/>
     <FullName/>
     <Adresse/>
     {/* <FontAwesomeIcon icon={faFacebook} /> */}
     
     
    </div>
  );
}

export default App;
