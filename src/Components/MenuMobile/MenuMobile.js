
import { AiOutlineClose } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import * as S from './StyleMenu/styleMenuMobile'

export default function MenuMobile({ menuIsVisible, setMenuIsVisible}){
    return(
        <>
            <S.DivMenu isVisible={menuIsVisible}>
                <AiOutlineClose size={30} onClick={() => setMenuIsVisible(false)}/>
                <S.NavMenu role='navigation' className='nav-menu'>
                    <Link className='link' to='/' translate='no'> Home </Link>
                    <Link className='link' to='/AboutMe'> Sobre mim </Link>
                    <Link className='link' to='/Projetos'> Projetos </Link>
                    <Link className='link' to='/Contato'> Contato </Link>
                </S.NavMenu>
            </S.DivMenu>
        </>
    )
}