import styled, {css} from 'styled-components';


export const DivMenu = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(3px);
    background: rgb(0,0,0);
    background: linear-gradient(34deg, rgba(0,0,0,0.5861695019804797) 0%, rgba(72,149,239,1) 70%);  
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
        top: 1.5rem;
        right: 1.5rem;
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