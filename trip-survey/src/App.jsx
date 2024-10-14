import './App.css'
import About from './Components/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import Form from './Components/Form';

function App() {

  return (
   
    <Router>
    <Routes>
      <Route path="/" element={<About/>} /> 
      <Route path="/form" element={<Form />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      
    </Routes>
  </Router>
    
  )
}

export default App
