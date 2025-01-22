import { Link } from "react-router-dom";
import { wordFromPictureList } from "../../lists/wordFromPictureList";
import { IList } from "../../types/types";

import { animated } from '@react-spring/web';


interface IProps {
    toggleFunc: () => void
    styles: () => void
}

const Menu: React.FC<IProps> = ({ toggleFunc, styles }) => {

    const themesList: IList[] = wordFromPictureList

    return (
        <div className="menu" >
            <div onClick={toggleFunc} className="menu__darkness none"></div>
            <animated.ul className="menu__list" style={{ ...styles }}>
                {themesList.map((item: IList) => {
                    return <li key={item.id} className="list__item">
                        <Link to={`/${item.id}`}>{item.theme}</Link>
                    </li>
                })}
            </animated.ul>
        </div >
    );
}

export default Menu;