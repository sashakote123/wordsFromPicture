import { ICard } from "../types/types";

export function shuffleArray(array: Array<number>) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export function randomInteger(min: number, max: number) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export const firstShuffle = (wordArray: Array<ICard>) => {
    let arr: Set<number> = new Set([])
    while (arr.size !== 5) arr.add(randomInteger(0, 4))
    let array = []
    for (let item of arr.values()) array.push(item)

    let newArray = [];
    for (let i = 0; i < 5; i++) {
        newArray.push(wordArray[array[i]])
    }

    let tmp = wordArray.slice(0)
    tmp.splice(0, 5)

    return newArray.concat(tmp)
}


export const generateArray = (i: number, wordsArray: Array<ICard>) => {
    let indexesArray: number[] = [i];
    while (indexesArray.length !== 4) {
        let tmpInd = randomInteger(0, wordsArray.length - 1)
        if (tmpInd !== i) indexesArray.push(tmpInd)
    }
    indexesArray = shuffleArray(indexesArray);
    return [wordsArray[indexesArray[0]], wordsArray[indexesArray[1]], wordsArray[indexesArray[2]], wordsArray[indexesArray[3]]]
}
