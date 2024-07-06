import Layout from "src/components/common/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import { mediumArticle } from "src/constant";
import Error from "./Error";

function Blog() {
  const [hasError, sethasError] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await axios.get(mediumArticle, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPosts(response.data.items);
    } catch (error) {
      sethasError(true);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      {hasError ? (
        <Error />
      ) : (
        <section>
          {posts.map((post) => {
            return <Post post={post} />;
          })}
        </section>
      )}
    </Layout>
  );
}

export default Blog;
