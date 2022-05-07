import styles from './Card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { cardIsFavorite } from '../../redux/store';
import { useState } from 'react';
import clsx from 'clsx';

const Card = (props) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const cardId = props.cardId;

  return (
    <li className={styles.card}>
      {props.title}
      <button
        type='button'
        className={clsx(styles.button, isFavorite && styles.isFavorite)}
        onClick={(e) => {
          e.preventDefault();
          setIsFavorite(!isFavorite);
          dispatch(cardIsFavorite( cardId ));
          console.log(cardId);
        }}>
        <span className='fa fa-star-o' />
      </button>
    </li>
  );
};

export default Card;
