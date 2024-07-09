// export interface UnsplashPhoto {
//   id: string;
//   description: string | null;
//   urls: {
//     regular: string;
//   };
// }
export interface ErrorMessageProps {
  message: string;
}
export interface UnsplashPhoto {
  id: string;
  description: string | null;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
  likes: number;
  slug?: string;
}
