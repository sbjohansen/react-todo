import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [searchString, setSearchString] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));

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
