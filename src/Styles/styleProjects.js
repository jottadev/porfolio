import styled from 'styled-components';

export const Main = styled.main`
    background: #212529;
    height: 85vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    @media screen and (max-width: 999px) {
        flex-direction: column;
        flex-wrap: nowrap;
        height: 100%;
        padding: 2rem 0 2rem 0;
    }


    section{
        max-width: 300px;
        width: 600px;
        height: 500px;
        border-radius: 5px;
        background: #343a40;
        border: #343a40 1px solid;

    :hover{
        border: #e9ecef 1px solid;
    }

    @media screen and (max-width: 999px) {
        max-width: 70vw;
        width: 70vw;
    }



    figure{


        img{
            width: 298px;
            height: 200px;
            border-radius: 5px;

            @media screen and (max-width: 999px) {
                width: 70vw;
                height: 300px;
                object-fit: cover;
            }
        }


    }

`

export const Divp = styled.div`

    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 999px) {
        height: 195px;
    }
    

    p{
        text-align: justify;
        padding: 6px;
        color: #fff;
    }


    div{
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        a{
            cursor: pointer;
            color: #e9ecef;
            text-decoration: none;
            text-transform: uppercase;
            border: 2px solid #e9ecef;
            padding: 4px 5px;
            border-radius: 5px;
            margin-bottom: 5px;


            :hover{
                transition: .3s ease-in-out;
                background: #e9ecef;
                color: #212529;
            }
        }

    }
`
