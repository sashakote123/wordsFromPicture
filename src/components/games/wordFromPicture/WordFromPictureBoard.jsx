import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef, useState } from "react";
import { addError, clearErrors } from "../../../store/accuracySlice";
import { addStreak, breakStreak } from "../../../store/streakSlice";
import { generateArray, shuffleArray } from "../../../helpers/methods";
import { updateCurrentWord } from "../../../store/initialShufflesSlice";
import LevelComplete from "./../../common/LevelComplete";
import KUTE from 'kute.js';

import { useSpring, animated } from "@react-spring/web";


let tmpArray = [{ translate: null }, { translate: null }, { translate: null }, { translate: null },]



const WordFromPictureBoard = () => {

    const [i, setI] = useState(0)

    const themeArray = useSelector(state => state.theme.array);
    const currentWord = useSelector(state => state.initialShufflesSlice.currentWord);


    let wordsArray = useMemo(() => shuffleArray(themeArray), [themeArray])
    const dispatch = useDispatch()

    let arrayToShow = useMemo(() => wordsArray.length ? generateArray(i, wordsArray) : tmpArray, [themeArray, i])


    const [currentWordsArray, setCurrentWordsArray] = useState(wordsArray);
    useEffect(() => {
        setCurrentWordsArray(wordsArray);
    }, [wordsArray]);



    useEffect(() => {
        dispatch(breakStreak())
        dispatch(clearErrors())
        setI(0)
    }, [])


    const toggleChoice = (e) => {
        const wrapper = document.querySelector('.btn__wrapper')
        const nextBtn = document.querySelector('.next-btn')
        wrapper.classList.remove('selected')
        nextBtn.classList.remove('selected')
        if (e.target.tagName !== 'LI' && e.target.tagName !== 'BUTTON') return
        let cards = document.querySelectorAll('.choice')
        for (let el of cards)
            el.classList.remove('selected')
        wrapper.classList.add('none')
        if (e.target.tagName !== 'DIV' && e.target.tagName !== 'BUTTON')
            e.target.classList.add('selected')
        if (e.target.tagName === 'BUTTON')
            btn.current.classList.add('none')
        dispatch(updateCurrentWord(e.target.innerHTML))

    }


    
    const ref3 = useRef()
    var tween5 = KUTE.fromTo(ref3.current, { translate3d: [0, 250, 0] }, { translate3d: [0, 0, 0] }, { duration: 200 });

    const btn = useRef()


    const [isShaking, setIsShaking] = useState(false);
    const shakeAnimation = useSpring({
        from: { x: 0 },
        to: async (next) => {
            if (isShaking) {
                await next({ x: -5 });
                await next({ x: 5 });
                await next({ x: -5 });
                await next({ x: 5 });
                await next({ x: 0});
            }
        },
        config: { tension: 500, friction: 5 }, // Параметры для резкости и скорости
        //reset: true, // сбрасывает анимацию
    });
    const triggerShake = () => {
        setIsShaking(true);
        //setIsShaking(false)
        setTimeout(() => setIsShaking(false), 500); // Сбрасываем shaking через 300ms
    };


    const checkRight = () => {
        if (!currentWord) return
        if (!currentWord.length) return
        if (wordsArray[i].translate === currentWord) {
            btn.current.classList.remove('none')
            tween5.start()

        }
        else {
            triggerShake()
            dispatch(addError())
            dispatch(breakStreak())
        }
    }

    const nextWord = () => {
        dispatch(addStreak())
        setI(i + 1)
    }

    const levelEnd = () => {
        if (i === 0) return false
        if (wordsArray.length)
            if (i === wordsArray.length) {
                return true
            } else return false

    }


    return (
        levelEnd() ? <LevelComplete /> :
            currentWordsArray.length > 0 ? (
                <animated.section className="wfp-board" style={{...shakeAnimation}}>
                    <div className="wpf__image">
                        <img src={wordsArray[i].image} alt="" />
                    </div>
                    {wordsArray.length > 0 ? (
                        <ul onClick={toggleChoice} className="wpf__choice">
                            <li className="choice">{arrayToShow[0]?.translate}</li>
                            <li className="choice">{arrayToShow[1]?.translate}</li>
                            <li className="choice">{arrayToShow[2]?.translate}</li>
                            <li className="choice">{arrayToShow[3]?.translate}</li>
                            <li ref={ref3} className="next-btn">
                                <div ref={btn} className="btn__wrapper none">
                                    <div className="wrapper__text">Верно!</div>
                                    <button onClick={nextWord} className="mainbtn special-btn">Далее</button>
                                </div>

                            </li>
                        </ul>
                    ) : (
                        <p>Loading...</p>
                    )}
                    <button onClick={checkRight} className="mainbtn">Проверить</button>
                </animated.section>
            ) : (
                <p>Loading...</p>
            )
    );

}

export default WordFromPictureBoard;