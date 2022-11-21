
import styled from 'styled-components';


export const MainA = styled.main`
    background: #212529;
    height: 85vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media screen and (max-width: 999px) {
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100vh;
        padding: 2rem 0 2rem 0;
    }

`

export const SectionA = styled.section`
    p{  
        width: 35vw;
        padding: 1rem;
        text-align: justify;
        color: #adb5bd;
        margin-bottom: 1rem;

        @media screen and (max-width: 999px) {
            width: 70vw;
        }
        
        @media screen and (max-width: 650px) {
            width: 80vw;
        }

        @media screen and (max-width: 350px) {
            font-size: .9rem;
            margin-bottom: 0;
        }
    }


`

export const Techs = styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;

    >svg{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 10px;

        @media screen and (max-width: 499px) {
            width: 40px;
            height: 40px;
        }

        @media screen and (max-width: 350px) {
            width: 30px;
            height: 30px;
        }

        :hover{
            transition: transform .2s ease-in-out;
            transform: scale(1.2);
        }
    }
`
export const FigureA = styled.figure`
    img{
        border-radius: 50px 5px 50px 5px;
        width: 300px;

        @media screen and (max-width: 999px) {
            width: 350px;
            height: 350px;
            border-radius: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: 650px) {
            width: 50vw;
            height: 20vh;
            border-radius: 20px 0 20px 0;
        }
    }

` 
