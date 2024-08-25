
export function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}

export function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export const firstShuffle = (wordArray) => {
    let arr = new Set([])
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
