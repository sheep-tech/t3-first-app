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

export interface IPoster {
  title: string;
  genre: string[];
  rating: number;
  trailer: string;
  posterImgUrl: string;
  description: {
    director: Person;
    cast?: Person[];
    synopsis: string;
  };
  reviews: IReview;

  seats?: number[][]
}
export interface Comment {
  title: string;
  author: Person;
  rating: number;
}
