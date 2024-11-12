export interface ICard {
    id: number,
    image: string,
    translate: string
}

export interface IList {
    id: number,
    theme: string | null,
    array: Array<ICard>
}

export interface ICounterState {
    streak: number
}

export interface IAccuracyState {
    errors: number
}


export interface ICurrentWord {
    currentWord: string | null
}