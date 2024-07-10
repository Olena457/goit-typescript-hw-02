import { FaSearch } from 'react-icons/fa';
import { Field, Formik, Form } from 'formik';
import toast from 'react-hot-toast';
import css from './SearchBar.module.css';
import { FC, useState } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleInputClick = (): void => {
    setIsActive(true);
  };

  const notify = () =>
    toast.error('Error loading.Please enter a search query!');

  return (
    <>
      <header className={css.header}>
        <h1 className={css.title}>Only the best photo</h1>
        <Formik
          initialValues={{ query: '' }}
          onSubmit={(values, actions) => {
            if (!values.query.trim()) {
              notify();
            }
            onSearch(values.query);
            actions.resetForm();
            setIsActive(false);
          }}
        >
          <Form>
            <div className={`${css.searchCont} ${isActive ? css.active : ''}`}>
              <Field
                className={css.input}
                type="text"
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search images"
                onClick={handleInputClick}
              />

              <button className={css.btn} type="submit">
                Search
              </button>
              <FaSearch className={`${css.icon} ${css.searchIcon}`} />
            </div>
          </Form>
        </Formik>
      </header>
    </>
  );
};

export default SearchBar;
