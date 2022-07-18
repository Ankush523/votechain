import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ChoosePage from './components/ChoosePage';
import VoterDetails from './components/VoterDetails';
import CandidateDetails from './components/CandidateDetails';
import GiveVote from './components/GiveVote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChoosePage/>} />
        <Route path="/voter" element={<VoterDetails/>}/>
        <Route path="/candidate" element={<CandidateDetails/>}/>
        <Route path="/castvote" element={<GiveVote/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
