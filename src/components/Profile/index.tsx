import { PostsType } from '../../redux/state';
import MyPosts from './MyPosts';
import ProfileInfo from './ProfileInfo';

type PropsType = {
  posts: Array<PostsType>;
  addPost: (postMessage: string) => void;
};

const Profile = (props: PropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
