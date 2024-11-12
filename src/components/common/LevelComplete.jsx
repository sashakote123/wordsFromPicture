import MainButton from "./MainButton";
import img from './../../images/gifs/levelComplete.gif'
import img2 from './../../images/icons/score.svg'
import img3 from './../../images/icons/accuracy.svg'
import { useSelector } from "react-redux";

const LevelComplete = () => {

    const themeArray = useSelector(state => state.theme.array);

    const errors = useSelector(state => state.accuracy.errors)

    //const themeArray = [1,2,3,4]

    //const errors = 4
    return (

        <div className="completedlesson">

            <div className="completed__image">
                <img src={img} alt="" />
            </div>
            <div className="completed__title">Урок завершён!</div>
            <div className="completed__cards">
               
                <div className="card__score">
                    <div className="card__text">Точность</div>
                    <div className="row__number">
                        <img src={img3} alt="" />
                        <div className="number__text text-accuracy">{100 - Math.floor(errors / themeArray.length * 100) < 0 ? 0 : 100 - Math.floor(errors / themeArray.length * 100)}%</div>
                    </div>
                </div>
            </div>
            <MainButton content={'Продолжить'} />

        </div>

    );
}

export default LevelComplete;