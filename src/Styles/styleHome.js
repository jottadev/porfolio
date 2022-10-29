import styled from 'styled-components';



export const MainH = styled.main`
    background: #212529;
    height: 85vh;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


    section{
        max-width: 500px;
        width: 550px;
        height: 500px;
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        h1{
            color: #e9ecef;
            font-weight: 300;
            font-size: 2.5rem;
        }

        p{
            color: #adb5bd;
        }
    }

`


export const Links = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;


    svg{
        width: 40px;
        height: 30px;
        color: #4895ef;

        :hover{
            transition: .2s ease-in-out;
            color: #266ab7;
        }
    }

`

export const FigureH = styled.figure`

    max-width: 500px;
    width: 550px;
    height: 500px;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 500px;
    }

 

`
