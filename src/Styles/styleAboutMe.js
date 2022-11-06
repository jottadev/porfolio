
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
        height: 100%;
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
            width: 75vw;
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

        :hover{
            transition: transform .2s ease-in-out;
            transform: scale(1.2);
        }
    }
`
export const FigureA = styled.figure`
    img{
        border-radius: 50px 5px 50px 5px;
        width: 350px;
    }

` 
