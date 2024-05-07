type Props = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar: React.FC<Props> = ({ currentTab, setCurrentTab }) => {
  return (
    <div className="w-full h-20 bg-gray-300 flex items-center gap-6 px-12 text-2xl">
      <button
        className="hover:underline px-4 py-2 rounded-md "
        style={{ background: currentTab === "Demo" ? "rgb(96 165 250)" : "" }}
        onClick={() => setCurrentTab("Demo")}
      >
        Demo
      </button>
      <button
        className="hover:underline px-4 py-2 rounded-md "
        style={{ background: currentTab === "Task 1" ? "rgb(96 165 250)" : "" }}
        onClick={() => setCurrentTab("Task 1")}
      >
        Task 1
      </button>
      <button
        className="hover:underline px-4 py-2 rounded-md "
        style={{ background: currentTab === "Task 2" ? "rgb(96 165 250)" : "" }}
        onClick={() => setCurrentTab("Task 2")}
      >
        Task 2
      </button>
      <button
        className="hover:underline px-4 py-2 rounded-md "
        style={{ background: currentTab === "Task 3" ? "rgb(96 165 250)" : "" }}
        onClick={() => setCurrentTab("Task 3")}
      >
        Task 3
      </button>
    </div>
  );
};

export default Navbar;
