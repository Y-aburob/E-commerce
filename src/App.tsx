import './App.css'
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

export default function App() {

  return (
    < >
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/404' element={<NotFound />}/>
        </Routes>
      </Router>
    </>
  )
}