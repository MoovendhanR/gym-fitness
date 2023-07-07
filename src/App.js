import './App.css';
import Banner from './Components/Banner/Banner';
import LastConatainer from './Components/Last-container/LastConatainer';
import Logobanner from './Components/Logo-Banner/Logobanner';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="container">
     <Navbar/>
     <Banner/>
     <Logobanner/>
     <LastConatainer/>
    </div>
  );
}

export default App;
