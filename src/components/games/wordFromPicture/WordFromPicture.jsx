
import WordFromPictureBoard from "./WordFromPictureBoard";
import WordFromPictureHeader from "./WordFromPictureHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeTheme } from "../../../store/currentThemeSlice";
import { wordFromPictureList } from "../../../lists/wordFromPictureList";

const WordFromPicture = () => {


    const dispatch = useDispatch();
    const obj = wordFromPictureList[0]

    useEffect(() => {

        dispatch(changeTheme(obj))

    }, [dispatch, obj])

    return (
        <div className="container">
            {/* <WordFromPictureHeader /> */}
            <WordFromPictureBoard />
        </div>

    );
}

export default WordFromPicture;