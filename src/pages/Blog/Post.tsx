import dayjs from "dayjs";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "./BlogContext";

function Post({ post }: { post: { [key: string]: string } }) {
  const navigate = useNavigate();
  const { setState } = useContext(BlogContext);
  return (
    <div
      className="border-b border-b-darkGray py-30 cursor-pointer hover:dark:bg-lightBlack hover:bg-extraLightGray transition-all"
      onClick={() => {
        setState((prev) => ({
          ...prev,
          title: post.title,
          createDate: dayjs(post.pubDate).format("DD/MM/YYYY"),
          currentPost: post.content,
        }));
        navigate(`/blog/${encodeURIComponent(post.title)}`);
      }}
    >
      <div className="md:flex justify-between mb-10">
        <p className="underline underline-offset-4 text-[20px]">{post.title}</p>
        <p className="pt-10 md:pt-0 font-thin">
          {dayjs(post.pubDate).format("DD/MM/YYYY")}
        </p>
      </div>
      <div className="flex flex-wrap text-mediumGray">
        {(post.categories as unknown as string[]).map((category: string) => {
          return <p className="mr-10">#{category}</p>;
        })}
      </div>
    </div>
  );
}

export default Post;
