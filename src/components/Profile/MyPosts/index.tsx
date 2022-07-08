import Post from './Post';

const MyPosts = (props: any) => {
  let postsElements = props.postsData.map((post: any) => (
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
