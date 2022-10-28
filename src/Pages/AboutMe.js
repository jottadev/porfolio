import React from 'react'
import Photo from '../Assets/photoprofile.jpg'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiJavascript } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import { SiStyledcomponents } from 'react-icons/si'
import { AiFillGithub } from "react-icons/ai";
import '../Styles/styleAboutMe.css'

export default function AboutMe(){
    return(
        <main className='main-a'>
            <section className='section-a'>
                <div>
                    <p >
                        Vamos lá... me chamo João, tenho 20 anos, moro no interior 
                        do estado do Maranhão. Tive meu primeiro contato com a programação aos 18 anos
                        e foi amor a primeira vista, e desde então a paixão só aumenta. Sou muito grato por todos os 
                        ensinamentos que e o mundo da tecnologia vem me proporcionando ao longo desses anos de estudos.
                    </p>
                    <p >
                        Estou em busca da minha primeira oportunidade como Desenvolvedor front-end,
                        utilizando as tecnologias Javascript e React. Porém, estou sempre aberto a aprender novas 
                        tecnologias.
                    </p>
                </div>
                <div className='techs'>
                    < AiFillHtml5  size={50} color={'#ff5733'} className='tech'/>
                    < DiCss3 size={50} color={'#0000ff'}  className='tech'/>
                    < DiJavascript size={50} color={'#ffa500'} className='tech'/>
                    < DiReact size={50} color={'#4ae5ff'} className='tech'/>
                    < SiStyledcomponents size={50} color={'#ee82ee'} className='tech'/>
                    < AiFillGithub size={50} color={'#6a5acd'} className='tech'/>
                </div>
            </section>

            <figure className='figure-a'>
                <img src={Photo} alt='Photo profile - Imagem'/>
            </figure>
        </main>
    )
}