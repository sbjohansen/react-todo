import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/cardsRedux';

const CardForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const columnId = props.columnId;
  const isFavorite = false;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ title, columnId, isFavorite }));
    setTitle('');
  };

  return (
    <form className={styles.cardform} onSubmit={handleSubmit}>
      <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
