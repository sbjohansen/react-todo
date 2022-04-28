import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_SEARCHSTRING', searchString });

    //console.log(searchString)
  };

  return (
    <form className={styles.searchform} onSubmit={handleSubmit}>
      <TextInput placeholder='Search' searchString={searchString.toString()} onChange={(e) => setSearchString(e.target.value.toString())} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
