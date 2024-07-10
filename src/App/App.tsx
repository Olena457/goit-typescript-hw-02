import { useState, useEffect } from 'react';
import { Loader } from './../components/Loader/Loader';
import { fetchUnsplash } from './../apiService/photos';
import { UnsplashPhoto } from './App.types';
import './App.css';
import ImageModal from './../components/ImageModal/ImageModal';
import LoadMoreBtn from './../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './../components/ErrorMessage/ErrorMessage';
import SearchBar from './../components/SearchBar/SearchBar';
import ImageGallery from './../components/ImageGallery/ImageGallery';
import { ResProps } from './../apiService/photos.type';

export default function App() {
  const [photo, setUnsplashPhoto] = useState<UnsplashPhoto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<UnsplashPhoto | null>(
    null
  );
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setIsError(true);
      return;
    }

    async function fetchData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data: ResProps = await fetchUnsplash(searchQuery, page);
        setUnsplashPhoto(prevState => [...prevState, ...data.results]);
        setTotalPage(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [searchQuery, page]);

  const handleSearch = async (item: string) => {
    setSearchQuery(item);
    setPage(1);
    setUnsplashPhoto([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = (item: UnsplashPhoto) => {
    setSelectedImage(item);
    setModalIsOpen(true);
  };

  function closeModal(): void {
    setModalIsOpen(false);
    setSelectedImage(null);
  }

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {photo.length > 0 && <ImageGallery onClick={openModal} items={photo} />}

      {selectedImage && (
        <ImageModal
          item={selectedImage}
          onClose={closeModal}
          isOpen={modalIsOpen}
        />
      )}

      {photo.length > 0 && !isLoading && page < totalPage && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}
