import React, { useState } from "react";
import PostWithProps from "../../demo/components/postWithProps";

function PostList() {
  // State to manage the list of posts
  const [posts, setPosts] = useState<{ title: string; content: string; }[]>([]);

  // State to manage the input values
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to handle adding a new post
  const addPost = () => {
    // Create a new post object
    const newPost = { title, content };

    // Update the posts state with the new post
    setPosts([...posts, newPost]);

    // Clear the input fields
    setTitle("");
    setContent("");
  };

  return (
    <div className="flex items-center flex-col">
      <h1>Task 1 - Reusable Components</h1>
      <div>
        <p>
          - Add logic for adding new posts to the list. The user should be able
          to provide the title and content of the post.
        </p>
        <p>
          - The component should display the list of posts in a card format.
          Each card should display the title and content of the post.
        </p>
        <p>- You can use the code from the demo.</p>
      </div>
      <h1 className="mt-12">Post List</h1>
      <div className="h-[30rem] w-[22rem] border border-black overflow-y-auto overflow-x-hidden p-4">
        {/* Generate added posts here */}
        <div className="space-y-2">
          {posts.map((post, index) => (
            <PostWithProps key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          className="border border-black"
          placeholder="New post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="border border-black"
          placeholder="New post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          onClick={addPost}
        >
          Add Post
        </button>
      </div>
    </div>
  );
}

export default PostList;
