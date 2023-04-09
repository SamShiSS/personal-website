import { Typography } from "@mui/material";
import { DateTime } from "luxon";
import Markdown from "markdown-to-jsx";
import { useEffect, useState } from "react";
import { useMatch } from "react-router";
import posts, { Post } from "../posts/posts";

interface PostWithContent extends Post {
  content: string;
}

function BlogPost() {
  const match = useMatch("/blog/*");
  const [post, setPost] = useState<PostWithContent>();

  useEffect(() => {
    const filename = match?.params["*"];
    if (!filename) {
      return;
    }
    import(`../posts/${filename}.md`).then((res) => {
      fetch(res.default)
        .then((res) => res.text())
        .then((content) =>
          setPost({
            ...posts[filename],
            content,
          })
        );
    });
  }, []);
  if (!post) {
    return null;
  }

  return (
    <>
      <Typography variant="h4">{post.title}</Typography>
      <Typography variant="caption">
        {DateTime.fromObject(post.createdAt).toFormat("LLLL dd, yyyy")}
      </Typography>
      <Markdown>{post.content}</Markdown>
    </>
  );
}

export default BlogPost;
