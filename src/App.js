import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ChoosePage from './components/ChoosePage';
import VoterDetails from './components/VoterDetails';
import CandidateDetails from './components/CandidateDetails';
import CandidateList from './components/CandidateList';
import ThankYou1 from './components/ThankYou1';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChoosePage/>} />
        <Route path="/voter" element={<VoterDetails/>}/>
        <Route path="/candidate" element={<CandidateDetails/>}/>
        <Route path="/castvote" element={<CandidateList/>} />
        <Route path="/thankyou1" element={<ThankYou1/>} />  
        <Route path="/result" element={<Results/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
