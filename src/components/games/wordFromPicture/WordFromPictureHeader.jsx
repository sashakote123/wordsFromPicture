import { useSelector } from 'react-redux';
import img3 from './../../../images/icons/streak.svg'
import img from './../../../images/icons/burger.svg'
import Menu from '../../common/Menu';


import { useState } from 'react';
import { useSpring } from '@react-spring/web';

const WordFromPictureHeader = () => {

    const streak = useSelector(state => state.streak.streak)


    const [isOpen, setIsOpen] = useState(false);

    const slideInAnimation = useSpring(
        window.innerWidth > 650 ? {

            transform: isOpen ? 'translateX(-500px)' : 'translateX(100%)',
            config: { tension: 300, friction: 20, clamp: true },
        } : {
            transform: isOpen ? 'translateX(-300px)' : 'translateX(100%)',
            config: { tension: 300, friction: 20, clamp: true },
        });

    const toggleMenu = () => {
        console.log(window.innerWidth);
        const menu = document.querySelector('.menu__darkness')
        setIsOpen((prev) => !prev);
        menu?.classList.toggle('none')

    }

    return (
        <div className="paregame__header">
            <div className="header__container">
                <Menu toggleFunc={toggleMenu} styles={slideInAnimation} />

                <div className="header__heading">
                    <div className="heading__title">Выберите подходящее слово</div>
                    <img onClick={toggleMenu} src={img} className="heading__button" alt='brgr' />

                </div>

                <div className="header__streak">
                    <img src={img3} alt="" />
                    <div className="streak__text"><span>Серия</span> x{streak}</div>
                </div>
            </div>


        </div>
    );
}

export default WordFromPictureHeader;