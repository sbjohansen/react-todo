import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

import { getIsFavorite } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Favorite = (props) => {
  const cards = useSelector((state) => getIsFavorite(state));

  if (cards.length === 0) return <Navigate to='/' />;

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.column}>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} cardId={card.id} isFavorite={card.isFavorite} columnId={card.columnId} />
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
