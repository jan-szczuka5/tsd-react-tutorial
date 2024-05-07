import { useState } from "react";
import PostList from "./components/demo/components/postList";
import Counter from "./components/demo/hooks/counter";
import Input from "./components/demo/hooks/input";
import Navbar from "./components/navbar";
import TaskOne from "./components/tasks/task-1/taskOne";
import TaskThree from "./components/tasks/task-3/taskThree";
import TaskTwo from "./components/tasks/task-2/taskTwo";
import AutoCounter from "./components/demo/hooks/autoCounter";

function App() {
  const [currentTab, setCurrentTab] = useState<string>("Demo");

  return (
    <>
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="overflow-y-auto py-8">
        <div className="flex justify-center items-center ">
          {currentTab === "Demo" && (
            <div className="flex gap-4 p-6 border border-black rounded-xl">
              <PostList />
              <Counter />
              <Input />
              <AutoCounter />
            </div>
          )}
          {currentTab === "Task 1" && <TaskOne />}
          {currentTab === "Task 2" && <TaskTwo />}
          {currentTab === "Task 3" && <TaskThree />}
        </div>
      </div>
    </>
  );
}

export default App;
