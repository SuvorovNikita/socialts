import Post from './Post';

const MyPosts = () => {
  return (
    <>
      <div>
        My Posts
        <div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className="posts">
        <Post like={1} message="Hi, how are you?" />
        <Post like={2} message="It's my first post" />
      </div>
    </>
  );
};

export default MyPosts;
