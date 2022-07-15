import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ChoosePage from './components/ChoosePage';
import VoterDetails from './components/VoterDetails';
import CandidateDetails from './components/CandidateDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ChoosePage/>} />
        <Route path="/voter" element={<VoterDetails/>}/>
        <Route path="/candidate" element={<CandidateDetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
