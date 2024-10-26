
import WordFromPictureBoard from "./WordFromPictureBoard";
import WordFromPictureHeader from "./WordFromPictureHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from "../../../store/currentThemeSlice";
import { wordFromPictureList } from "../../../lists/wordFromPictureList";
import { Route, Routes, useLocation, useParams } from "react-router-dom";

const WordFromPicture = () => {


    const dispatch = useDispatch();
    const { index } = useParams()
    const obj = wordFromPictureList[index]



    useEffect(() => {

        dispatch(changeTheme(obj))

    }, [dispatch, obj])

    return (

        <WordFromPictureBoard />
    );
}

export default WordFromPicture;