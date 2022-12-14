import React from 'react'
import {Helmet } from 'react-helmet'
import bomsono from '../Assets/p-bomsono.jpg'
import cacl from '../Assets/p-calc.jpg'
import recipes from '../Assets/p-recipes.jpg'
import codar from '../Assets/p-codar.jpg'
import * as S from '../Styles/styleProjects'

const TITLE = 'Portfolio Dev - Projetos'

export default function Project(){
    return(

        <S.Main>
            
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>


            <section>
                <figure>
                    <img src={recipes} alt="Projeto Recipes - Pagina da web." />
                </figure>

                <S.Divp>
                    <p>
                        Projeto foi desenvolvido pela Vai na Web para seus alunos praticarem seus 
                        conhecimentos em React Hooks, Github e aprimorar o trabalho em equipe.
                    </p>
                    <div>
                        <a href="https://recipesshow.netlify.app/" rel="noopener noreferrer" target='_blank'> Ver projeto </a>
                        <a href="https://github.com/jottadev/recipes" rel="noopener noreferrer" target='_blank'> Código </a>
                    </div>
                </S.Divp>
            </section>

            <section>
                <figure>
                    <img src={cacl} alt="Projeto Calculadora - Calculadora web." />
                </figure>

                <S.Divp>
                    <p >
                        Primeiro projeto desenvolvido utilizando Javascript, usando principalmente a função eval.
                        Calculadora de aparência simples, porém eficiente.
                    </p>
                    <div >
                        <a href="https://jottadev.github.io/calculadora/" rel="noopener noreferrer" target='_blank'> Ver projeto </a>
                        <a href="https://github.com/jottadev/calculadora" rel="noopener noreferrer" target='_blank'> Código </a>
                    </div>
                </S.Divp>

            </section>

            <section>

                <figure>
                    <img src={bomsono} alt="Projeto Bom Sono - Pagina da web." />
                </figure>

                <S.Divp>
                    <p>
                        Projeto desenvolvido para aprimorar / reaquecer meus conhecimentos em HTML e CSS Responsivo.
                        Desafio disponivel no site do Dev Challenge.
                    </p>
                    <div>
                        <a href="https://jottadev.github.io/Bomsono-Landing-Page/" rel="noopener noreferrer" target='_blank'> Ver projeto </a>
                        <a href="https://github.com/jottadev/Bomsono-Landing-Page" rel="noopener noreferrer" target='_blank'> Código </a>
                    </div>
                </S.Divp>

            </section>

            <section>
                <figure>
                    <img src={codar} alt="Projeto Codar - Pagina da web." />
                </figure>
                <S.Divp>
                    <p>
                        Projeto desenvolvido com HTML e CSS Responsivo. O desafio disponivel no site do Dev Challenge.
                    </p>
                    <div>
                        <a href="https://jottadev.github.io/landingPage-codar/" rel="noopener noreferrer" target='_blank'> Ver projeto </a>
                        <a href="https://github.com/jottadev/landingPage-codar" rel="noopener noreferrer" target='_blank'> Código </a>
                    </div>
                </S.Divp>
            </section>

        </S.Main>
    )
}