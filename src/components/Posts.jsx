import { useDispatch, useSelector } from "react-redux";
import styles from "./counter.module.css";
import { useEffect } from "react";
import { fetchPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  let content;

  if (isLoading) {
    content = <h2>Posts Loading ...</h2>;
  }

  if (!isLoading && isError) {
    content = <h2>{error}</h2>;
  }

  if (!isLoading && !isError && posts.length == 0) {
    content = <h2>posts not found</h2>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ol className={styles.posts}>
        {posts?.map((post) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ol>
    );
  }

  return <div>{content}</div>;
};

export { Posts };
