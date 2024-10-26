export interface ICard {
    id: number,
    image: string,
    translate: string
}

export interface IList {
    theme: string,
    array: Array<ICard>
}