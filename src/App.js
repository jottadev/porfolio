import React, { useState} from 'react'
import {Helmet } from 'react-helmet'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Contato from './Pages/Contact'
import Projetos from './Pages/Projects'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import './Styles/styleHeader.css'
import { AiOutlineMenu } from 'react-icons/ai'
import MenuMobile from './Components/MenuMobile/MenuMobile'
import { GlobalStyle } from "./GlobalStyle/GlobalStyle"


const TITLE = 'Portfolio Dev'

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  
  return (
    

    <Router>  

      <GlobalStyle />

      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      < MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}  
      />

      <header>
        <h2 translate='no'> Portfolio Dev </h2>
        <nav role='navigation' >
          <Link className='link' to='/' translate='no'> Home </Link>
          <Link className='link' to='/AboutMe'> Sobre mim </Link>
          <Link className='link' to='/Projetos'> Projetos </Link>
          <Link className='link' to='/Contato'> Contato </Link>
        </nav>
        
        < AiOutlineMenu className='menu-icon' size={30} color='#fff' onClick={() => setMenuIsVisible(true)}/>

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
