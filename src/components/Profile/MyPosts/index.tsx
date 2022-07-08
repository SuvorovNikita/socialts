import Post from './Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, messages: 'Hi, how are you?', likeCount: 12 },
    { id: 2, messages: "It's my first post", likeCount: 10 },
  ];

  let postsElements = postsData.map((post) => (
    <Post like={post.likeCount} message={post.messages} id={post.id} />
  ));

  return (
    <>
      <div>
        <h1>My Posts</h1>
        <div>
          <textarea name="" id=""></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className="posts">{postsElements}</div>
    </>
  );
};

export default MyPosts;
