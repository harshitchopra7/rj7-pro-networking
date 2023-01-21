import React, { useState, useEffect } from "react";
import "./Feed.css";
import FeedCard from "./FeedCard";

function Feed() {
  const [posts, setPosts] = useState([]);

  async function getPosts() {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    console.log(data.posts);
    setPosts(data.posts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="feed_container">
      <div className="feed_add">
        <div className="feed_add_input">
          <input />
          <button>Add</button>
        </div>

        <button className="feed_add_photo">Add Photo</button>
      </div>

      {posts?.map((value) => (
        <FeedCard
          image={value.userId}
          name={value.userId}
          tags={value.tags}
          message={value.body}
        />
      ))}
    </div>
  );
}

export default Feed;
