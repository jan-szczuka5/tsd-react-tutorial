import Post from "./post";
import PostWithProps from "./postWithProps";

function PostList() {
  return (
    <div className="border border-black p-4 rounded-lg">
      <h1>Post List</h1>
      <div className="space-y-2">
        <Post />
        <Post />
        <Post />
        <PostWithProps
          title="My hate-hate relationship with C#"
          content="I hate C# because it doesn't work and it hates me because it doesn't want to work."
        />
        <PostWithProps
          title="Dogs vs Cats - final battle"
          content="I love cats. I love dogs. I love all animals. But I love cats more than dogs."
        />
      </div>
    </div>
  );
}

export default PostList;
