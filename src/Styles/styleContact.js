
import styled from 'styled-components';

export const Main = styled.main`
    height: 85vh;
    background: #212529;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`
export const Form = styled.form`
    width: 500px;
    height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    input{
        width: 450px;
        height: 50px;
        border: 0;
        border-radius: 5px;
        padding: 5px;
    }

    button{
        width: 450px;
        height: 50px;
        border: 0;
        border-radius: 5px;
        padding: 5px;
        background: #266ab7;
        cursor: pointer;
        color: #e9ecef;
        font-weight: 500;
        font-size: 1rem;

        :hover{
            transition: .3s ease-in-out;
            background: #104786;
        }

    }

    textarea{
        width: 450px;
        height: 150px;
        border: 0;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;
        resize: none;
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