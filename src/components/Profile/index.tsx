import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.postsData} />
    </div>
  );
};

export default Profile;
