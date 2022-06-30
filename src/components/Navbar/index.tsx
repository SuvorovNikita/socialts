import classes from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.link}>
        <NavLink className={(isActive) => (isActive.isActive ? classes.active : '')} to="/profile">
          Profile
        </NavLink>
      </div>
      <div className={classes.link}>
        <NavLink className={(isActive) => (isActive.isActive ? classes.active : '')} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={classes.link}>
        <NavLink className={(isActive) => (isActive.isActive ? classes.active : '')} to="/news">
          News
        </NavLink>
      </div>
      <div className={classes.link}>
        <NavLink className={(isActive) => (isActive.isActive ? classes.active : '')} to="/music">
          Music
        </NavLink>
      </div>
      <div className={classes.link}>
        <NavLink className={(isActive) => (isActive.isActive ? classes.active : '')} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
