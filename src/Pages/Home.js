import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineFilePdf } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import cv from '../Assets/cv.pdf'
import dev from '../Assets/programming.svg'
import '../Styles/styleHome.css'

export default function Home(){
    return(
        <main>
            <section>
                <div>
                    <h1> Hey, I'm João. </h1>
                    <p> 
                        Desenvolvedor Front-end & Desinger gráfico.
                    </p>
                </div>
                <div className='links'>
                    <a href={cv} download="curriculo-joao" > <AiOutlineFilePdf className='icon'/> </a>
                    <a href='https://www.linkedin.com/in/joaoythalo/'  rel="noopener noreferrer" target='_blank'> <AiOutlineLinkedin className='icon'/> </a>
                    <a href='https://github.com/jottadev' rel="noopener noreferrer" target='_blank'> <AiFillGithub className='icon'/> </a>
                    <a href='https://www.instagram.com/juaoythalo/' rel="noopener noreferrer" target='_blank'> <AiOutlineInstagram className='icon'/> </a>
                </div>
            </section>

            <figure>
                <img src={dev} alt='Programção'/>
            </figure>

        </main>
    )
}