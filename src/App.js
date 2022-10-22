import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Contato from './Pages/Contact'
import Projetos from './Pages/Projects'
import Home from './Pages/Home'
import './Styles/styleHeader.css'

function App() {
  return (

    <Router>

      <header>
        <h2> Portfolio Dev </h2>
        <nav>
          <Link className='link' to='/'> Home </Link>
          <Link className='link' to='/Projetos'> Projetos </Link>
          <Link className='link' to='/Contato'> Contato </Link>
        </nav>
        </header>

      <Routes>
        <Route path='/Contato' element={< Contato />} />
        <Route path='/Projetos' element={< Projetos />} />
        <Route path='/' element={< Home />} />
      </Routes>

    </Router>
  );
}

export default App;
