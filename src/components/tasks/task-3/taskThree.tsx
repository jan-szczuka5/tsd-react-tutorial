function TaskThree() {
  // TODO: Implement the logic for adding new posts here.

  return (
    <div className="flex items-center flex-col">
      <h1>Task 3 - Custom Hook</h1>
      <div className="text-sm">
        <p>
          - Create custom hook named however you like, which will handle the
          logic of the form.
        </p>
        <p>
          - The form has 4 fields: username, email, password, and confirm
          password.
        </p>
        <p>- There should be no data stored outside of that custom hook.</p>
        <p>
          - The form should have a submit button to log the data in the console.
        </p>
        <p>- The form should have a rest button for resetting the data.</p>
        <h2>Bonus:</h2>
        <p>- Password match validation.</p>
        <p>- Email format validation.</p>
      </div>
      <form className="flex flex-col items-center">
        <label htmlFor="fusername">Username</label>
        <input
          required
          type="text"
          id="fusername"
          name="fusername"
          className="border border-black"
        />
        <label htmlFor="femail">E-mail</label>
        <input
          required
          type="email"
          id="femail"
          name="femail"
          className="border border-black"
        />
        <label htmlFor="fpassword">Password</label>
        <input
          required
          type="password"
          id="fpassword"
          name="fpassword"
          className="border border-black"
        />
        <label htmlFor="fconfpassword">Confirm Password</label>
        <input
          required
          type="password"
          id="fconfpassword"
          name="fconfpassword"
          className="border border-black"
        />
        <button
          className="mt-4 border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button className="text-sm underline hover:text-blue-700 text-blue-500">
        Clear form
      </button>
    </div>
  );
}

export default TaskThree;
