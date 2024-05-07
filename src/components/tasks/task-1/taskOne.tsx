function TaskOne() {
  // TODO: Implement the logic for adding new posts here.

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
      <div className="h-[30rem] w-[20rem] border border-black overflow-y-auto overflow-x-hidden">
        {/* // TODO: Generate added posts here */}
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <input
          type="text"
          className="border border-black"
          placeholder="New post title"
        />
        <input
          type="text"
          className="border border-black"
          placeholder="New post content"
        />
        <button className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300">
          Add Post
        </button>
      </div>
    </div>
  );
}

export default TaskOne;
