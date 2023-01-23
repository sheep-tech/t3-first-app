export interface Person {
    firstName: string
    lastName?: string
    profilePictureUrl?: string

}
export interface IPoster {
    title: string
    genre: string[]
    rating: number
    trailer: string
    posterImgUrl: string
    description: {
        director: Person
        cast?: Person[]
        synopsis: string
    }
    // seats: 
}