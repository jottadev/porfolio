import styled, {css} from 'styled-components';


export const DivMenu = styled.div`
    position: absolute;

    width: 100%;
    height: 50%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
    background: rgb(14,15,17);
    background: linear-gradient(180deg, rgba(14,15,17,1) 0%, rgba(255,255,255,0) 100%);
    opacity: .5;
    transition: .3s ease-in-out;


    opacity: 0;
    pointer-events: none;


    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;

        svg{
            transform: rotate(8px)
        }
    `}

    svg{
        position: absolute;
        top: 3.2rem;
        right: 2rem;
        color: #fff;
        cursor: pointer;
        transform: rotate(45deg)
        transition: .3s ease-in-out;
    }



`

export const NavMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`