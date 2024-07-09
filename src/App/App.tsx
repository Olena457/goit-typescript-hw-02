import { useState, useEffect } from 'react';
import './App.css';
import css from './../components/ImageModal/ImageModal.module.css';
import Loader from './../components/Loader/Loader';
import { fetchUnsplash } from './../apiService/photos';
import ImageModal from './../components/ImageModal/ImageModal';
import LoadMoreBtn from './../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './../components/ErrorMessage/ErrorMessage';
import SearchBar from './../components/SearchBar/SearchBar';
import ImageGallery from './../components/ImageGallery/ImageGallery';
import { UnsplashPhoto } from './App.types';
// import { KnownAsTypeMap } from 'vite';

function App() {
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<UnsplashPhoto[]>([]);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    setError(null);
    setImages([]);
    setPage(1);
  };

  const handleImageModal = (image: UnsplashPhoto) => {
    setModalImage(image.urls.regular);
  };

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = (image: string) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const itemsPerPage: number = 12;

  useEffect(() => {
    if (!query) return;
    async function getImages() {
      try {
        setLoading(true);
        const response = await fetchUnsplash({
          query,
          page,
          per_page: itemsPerPage, // Corrected property name
        });
        const fetchedImages: UnsplashPhoto[] = response.data.results;
        setImages(prevImages => [...prevImages, ...fetchedImages]);
        setHasMore(response.data.total_pages > page);
      } catch (error) {
        let errorMessage = 'Sorry, but nothing was found for your request';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        console.log(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar submit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onClick={openModal} />
      {loading && <Loader />}
      {loading && <p>Loading data, please wait...</p>}
      {hasMore && !loading && <LoadMoreBtn onClick={loadMore} />}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}

      {modalImage && (
        <ImageModal
          className={css.modalImg}
          onSelect={handleImageModal}
          isOpen={!!modalImage}
          onRequestClose={closeModal}
          image={modalImage}
        />
      )}
    </>
  );
}

export default App;
