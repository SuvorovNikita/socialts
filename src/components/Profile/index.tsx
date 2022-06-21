import MyPosts from './MyPosts';
import classes from '../Profile/Profile.module.css';
import React from 'react';

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img className={classes.bg} src="https://images5.alphacoders.com/473/473132.jpg" alt="bg" />
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
