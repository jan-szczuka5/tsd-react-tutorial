# TSD - React Tutorial

## Authors

##### Kamil Konefeld

##### Adam Kopiec

##### Jakub Kozłowski

##### Mikołaj Krakowiak

## Instruction

1. Install latest version of [Node](https://nodejs.org/en) if you don't have it already installed.
2. Copy the repository or fork it.
3. Open terminal in the folder with the project and install dependencies .

```bash
npm install
```

4. Start the project.

```bash
npm run dev
```

5. There are already installed all dependencies that you will need to solve the tasks.
6. There is also Tailwindcss installed if you would like to style your elements with it.
7. All the files related to given tasks should be within folders that are already created for those tasks.

## Tasks

### Task 1

- Add logic for adding new posts to the list. The user should be able to provide the title and content of the post.
- The component should display the list of posts in a card format. Each card should display the title and content of the post.
- You can use the code from the demo.

```typescript
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
```

```html
 <div className="h-[30rem] w-[22rem] border border-black overflow-y-auto overflow-x-hidden p-4">
  {/* Generate added posts here */}
  <div className="space-y-2">
    {posts.map((post, index) => (
      <PostWithProps key={index} title={post.title} content={post.content} />
    ))}
  </div>
</div>
```

### Task 2

- Create logic for two counters. Each counter has an input field where user can provide a number to increase the counter by that number.
- Counter 1: Whenever user increases the counter, the value should update on the screen.
- Counter 2: Whenever user increases the counter, the value should not update on the screen until next rerender, no matter how many times user increased it.

```typescript
function TaskTwo() {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const [firstCounter, setFirstCounter] = useState(0);
  const secondCounter = useRef(0);

  function handleFirstCounter() {
    if (!firstInputRef.current || !firstInputRef.current.value) return;

    setFirstCounter(firstCounter + firstInputRef.current.valueAsNumber);
  }

  function handleSecondCounter() {
    if (!secondInputRef.current || !secondInputRef.current.value) return;

    secondCounter.current += secondInputRef.current.valueAsNumber;
   }

  return (
```

```html
<div className="flex gap-4 mt-12">
        <div className="flex flex-col gap-2">
          <h2>Counter: {firstCounter}</h2>
          <input
            ref={firstInputRef}
            className="border border-black"
            type="number"
          />
          <button
            onClick={handleFirstCounter}
            className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          >
            Increase counter 1
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Counter: {secondCounter.current}</h2>
          <input
            ref={secondInputRef}
            className="border border-black"
            type="number"
          />
          <button
            onClick={handleSecondCounter}
            className="border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          >
            Increase counter 2
          </button>
        </div>
      </div>
```

### Task 3

- Create custom hook named however you like, which will handle the logic of the form.
- The form has 4 fields: username, email, password, and confirm password.
- There should be no data stored outside of that custom hook.
- The form should have a submit button to log the data in the console.
- The form should have a rest button for resetting the data.

#### Bonus style points:

- Password match validation.
- Email format validation.
