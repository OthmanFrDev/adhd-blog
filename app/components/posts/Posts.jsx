import React from "react";
import Post from "./post-item/Post";

const Posts = () => {
  return (
    <section className="container mx-auto md:px-20 py-10 w-9/12 lg:w-100 md:w-100">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/** grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14 text-justify">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
};

export default Posts;
