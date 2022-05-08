import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { cardIsFavorite } from '../../redux/cardsRedux';
import { removeCard } from '../../redux/cardsRedux';
import { useState } from 'react';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const cardId = props.cardId;

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          type='button'
          className={clsx(styles.button, isFavorite && styles.isFavorite)}
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
            dispatch(cardIsFavorite(cardId));
          }}>
          <span className='fa fa-star-o' />
        </button>
        <button
          type='button'
          className={clsx(styles.button, styles.removeCard)}
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeCard(cardId));
          }}>
          <span className='fa fa-trash-o' />
        </button>
      </div>
    </li>
  );
};

export default Card;
