import React from 'react'
import {Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Contato from './Pages/Contact'
import Projetos from './Pages/Projects'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import './Styles/styleHeader.css'
import { AiOutlineMenu } from 'react-icons/ai'

const TITLE = 'Portfolio Dev'

function App() {

  return (

    <Router>

      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <header>
        <h2 translate='no'> Portfolio Dev </h2>
        <nav role='navigation' >
          <Link className='link' to='/' translate='no'> Home </Link>
          <Link className='link' to='/AboutMe'> Sobre mim </Link>
          <Link className='link' to='/Projetos'> Projetos </Link>
          <Link className='link' to='/Contato'> Contato </Link>
        </nav>
        
        < AiOutlineMenu className='menu-icon' size={30} color='#fff'/>

        </header>

      <Routes>
        <Route path='/Contato' element={< Contato />} />
        <Route path='/AboutMe' element={< AboutMe />} />
        <Route path='/Projetos' element={< Projetos />} />
        <Route path='/' element={< Home />} />
      </Routes>

    </Router>
  );
}

export default App;
