import { PostsType } from '../../../redux/state';
import Post from './Post';
import React from 'react';

type PropsType = {
  posts: Array<PostsType>;
  addPost: (postMessage: string) => void;
};

const MyPosts = (props: PropsType) => {
  let postsElements = props.posts.map((post: any) => (
    <Post like={post.likeCount} message={post.messages} id={post.id} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const onAddPost = () => {
    debugger;
    if (newPostElement.current) {
      props.addPost(newPostElement.current?.value);
      newPostElement.current.value = '';
    }
  };

  return (
    <>
      <div>
        <h1>My Posts</h1>
        <div>
          <textarea ref={newPostElement}></textarea>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className="posts">{postsElements}</div>
    </>
  );
};

export default MyPosts;
