export interface UnsplashPhoto {
  id: string;
  alt_description: string;
  description?: string | null;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
}
