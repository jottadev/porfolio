import React from 'react'
import {Helmet } from 'react-helmet'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import cv from '../Assets/cv.pdf'
import '../Styles/styleContact.css'

const TITLE = 'Portfolio Dev - Contato'

export default function Contact(){
    return(
        <main role='main'>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <section >
               <form action='https://formsubmit.co/contato.joaoythalo@gmail.com' method="POST" target="_blank" rel="noopener noreferrer" className='form-c'>
                    <input type='text' name='text' id='ip-text' required placeholder='Digite seu nome aqui.'  autoComplete='none' autoFocus/>
                    <input type='email' name='email' id='ip-email' placeholder='Digite seu email aqui.' required  autoComplete='none'/>
                    <textarea name='textarea' id='ip-area' placeholder='Digite seu mensagem aqui' required  autoComplete='none'></textarea>
                    <button type='reset' role='button'> Limpar </button>
                    <button type='submit' role='button'> Enviar </button>
               </form>
            </section>
            <section>
                <div className='links'>
                    <a href={cv} download="curriculo-joao" > <AiOutlineFilePdf className='icon'/> </a>
                    <a href='https://www.linkedin.com/in/joaoythalo/'  rel="noopener noreferrer" target='_blank'> <AiOutlineLinkedin className='icon'/> </a>
                    <a href='https://github.com/jottadev' rel="noopener noreferrer" target='_blank'> <AiFillGithub className='icon'/> </a>
                    <a href='https://www.instagram.com/juaoythalo/' rel="noopener noreferrer" target='_blank'> <AiOutlineInstagram className='icon'/> </a>
                </div>
            </section>
        </main>
    )
}