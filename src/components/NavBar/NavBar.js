import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navbar}>
          <span className='fa fa-tasks' />
          <ul className={styles.navlist}>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)} to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)}  to='/favorite'>Favorite</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? styles.linkActive : undefined)}  to='/about'>About</NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
