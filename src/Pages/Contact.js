import React from 'react'
import {Helmet } from 'react-helmet'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import cv from '../Assets/cv.pdf'
import * as S from '../Styles/styleContact'

const TITLE = 'Portfolio Dev - Contato'

export default function Contact(){
    return(
        <S.Main>

            <Helmet>
                <title>{TITLE}</title>
            </Helmet>

            <section >
               <S.Form action='https://formsubmit.co/contato.joaoythalo@gmail.com' method="POST" target="_blank" rel="noopener noreferrer">
                    <input type='text' name='text' id='ip-text' required placeholder='Digite seu nome aqui.'  autoComplete='none'/>
                    <input type='email' name='email' id='ip-email' placeholder='Digite seu email aqui.' required  autoComplete='none'/>
                    <textarea name='textarea' id='ip-area' placeholder='Digite seu mensagem aqui' required  autoComplete='none'></textarea>
                    <button type='reset' > Limpar </button>
                    <button type='submit' > Enviar </button>
               </S.Form>
            </section>
            <section>
                <S.Links>
                    <a href={cv} download="curriculo-joao" > <AiOutlineFilePdf className='icon'/> </a>
                    <a href='https://www.linkedin.com/in/joaoythalo/'  rel="noopener noreferrer" target='_blank'> <AiOutlineLinkedin className='icon'/> </a>
                    <a href='https://github.com/jottadev' rel="noopener noreferrer" target='_blank'> <AiFillGithub className='icon'/> </a>
                    <a href='https://www.instagram.com/juaoythalo/' rel="noopener noreferrer" target='_blank'> <AiOutlineInstagram className='icon'/> </a>
                </S.Links>
            </section>
        </S.Main>
    )
}