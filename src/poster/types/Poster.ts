export interface Person {
  firstName: string;
  role?: string;
  lastName?: string;
  profilePictureUrl?: string;
}
export interface IReview {
    comments: Comment[];
    totalReviews: number;
}
export interface Movie {
    title: string;
    posterImgUrl: string;
    rating: number;

}
export interface IPoster extends Movie{
  genre: string[];
  trailer: string;
  description: {
    director: Person;
    cast?: Person[];
    synopsis: string;
  };
  reviews?: IReview;

  seats?: number[][]

  recommendedMovies?: Movie[];

}
export interface Comment {
  title: string;
  author: Person;
  content: string;
  rating: number;
}
