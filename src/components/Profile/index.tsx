import { PostsType } from '../../redux/state';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

type PropsType = {
  posts: Array<PostsType>;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
