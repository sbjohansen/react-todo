import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString } from '../../redux/searchStringRedux';
import { getSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  const currentSearchString = useSelector(getSearchString);

  const [searchString, setSearchString] = useState(currentSearchString);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchform} onSubmit={handleSubmit}>
      <TextInput placeholder='Search' searchString={searchString.toString()} value={searchString} onChange={(e) => setSearchString(e.target.value.toString())} />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
