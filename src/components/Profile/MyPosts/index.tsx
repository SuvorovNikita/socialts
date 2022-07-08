import Post from './Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, messages: 'Hi, how are you?', likeCount: 12 },
    { id: 2, messages: "It's my first post", likeCount: 10 },
  ];

  return (
    <>
      <div>
        <h1>My Posts</h1>
        <div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className="posts">
        <Post like={postsData[0].likeCount} message={postsData[0].messages} id={postsData[0].id} />
        <Post like={postsData[1].likeCount} message={postsData[1].messages} id={postsData[1].id} />
      </div>
    </>
  );
};

export default MyPosts;
