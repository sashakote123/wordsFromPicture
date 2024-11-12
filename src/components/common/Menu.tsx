import { Link } from "react-router-dom";
import { wordFromPictureList } from "../../lists/wordFromPictureList";
import { IList } from "../../types/types";

import { useSpring, animated } from '@react-spring/web';
import { useState } from "react";

interface IProps {
    toggleFunc: () => void
    styles:()=>void
}

const Menu: React.FC<IProps> = ({ toggleFunc, styles }) => {

    const themesList: IList[] = wordFromPictureList

    //const [isOpen, setIsOpen] = useState(false);

    // Настройка анимации с использованием useSpring
    // const slideInAnimation = useSpring({
    //     transform: isOpen ? 'translateX(0%)' : 'translateX(100%)', // 100% для скрытого состояния
    //     config: { tension: 200, friction: 20 }, // Параметры для настройки плавности
    // });

    // const toggleMenu = () => {
    //     setIsOpen((prev) => !prev);
    //     const menu = document.querySelector('.menu')
    //     menu?.classList.toggle('none')
    // }

    return (
        <div className="menu" >
            <div onClick={toggleFunc} className="menu__darkness none"></div>
            <animated.ul className="menu__list" style={{...styles}}>
                {themesList.map((item: IList) => {
                    return <li className="list__item">
                        <Link to={`/${item.id}`}>{item.theme}</Link>
                    </li>
                })}
            </animated.ul>
        </div >
    );
}

export default Menu;