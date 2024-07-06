import { useContext, useEffect } from "react";
import { BlogContext } from "./BlogContext";
import Layout from "src/components/common/Layout";
import { useNavigate } from "react-router-dom";

function PostDetail() {
  const navigate = useNavigate();
  const { title, createDate, currentPost } = useContext(BlogContext);

  useEffect(() => {
    if (!currentPost) navigate("/blog");
  }, [currentPost]);

  return (
    <Layout>
      <header className="border-b border-b-darkGray py-10 md:flex items-end justify-between">
        <h1 className="text-[24px] font-medium md:text-[36px] md:max-w-[60%]">
          {title}
        </h1>
        <p className="text-lightGray">{createDate}</p>
      </header>
      <article
        dangerouslySetInnerHTML={{ __html: currentPost }}
        className="article py-20 md:px-60 mx-auto leading-relaxed font-openSans"
      />
    </Layout>
  );
}

export default PostDetail;
