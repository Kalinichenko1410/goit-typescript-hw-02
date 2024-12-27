import { Field, Form, Formik } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={({ query }, actions) => {
          const trimmedQuery = query.trim();
          if (!trimmedQuery) {
            toast.error('Please enter a keyword to search!');
            return;
          }
          onSearch(trimmedQuery);
          actions.resetForm();
        }}
      >
        <Form className={css.search_panel}>
          <Field
            className={css.search_field}
            name="query"
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button className={css.searchBtn} type="submit">
            <GoSearch />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
