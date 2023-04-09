import { Box, Typography } from "@mui/material";
import { sortBy } from "lodash";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import posts from "../posts/posts";

function Blog() {
  return (
    <>
      {sortBy(
        Object.entries(posts),
        ([, post]) => -DateTime.fromObject(post.createdAt).toMillis()
      ).map(([filename, post]) => (
        <Box key={filename} paddingBottom="2.5rem">
          <Typography variant="h4" paddingBottom="0.5rem">
            <Link to={`/blog/${filename}`}>{post.title}</Link>
          </Typography>
          <Typography variant="caption">
            {DateTime.fromObject(post.createdAt).toFormat("LLLL dd, yyyy")}
          </Typography>
          <Typography variant="body1" paddingBottom="0.5rem">
            {post.synopsis}...
          </Typography>
        </Box>
      ))}
    </>
  );
}

export default Blog;
