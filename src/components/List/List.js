import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns, getColumnsByList, getListById } from '../../redux/store';

const List = () => {
  const listData = useSelector(state => getListById(state, 1 )) 
  const column = useSelector(state => getColumnsByList(state, 1))
 
  console.log('test', column);
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
        </h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {column.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
