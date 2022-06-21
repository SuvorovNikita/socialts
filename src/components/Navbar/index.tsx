import classes from './Navbar.module.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <a className={`${classes.link} ${classes.active}`} href="#.">
          Profile
        </a>
      </div>
      <div>
        <a className={classes.link} href="#.">
          Messages
        </a>
      </div>
      <div>
        <a className={classes.link} href="#.">
          News
        </a>
      </div>
      <div>
        <a className={classes.link} href="#.">
          Music
        </a>
      </div>
      <div>
        <a className={classes.link} href="#.">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
