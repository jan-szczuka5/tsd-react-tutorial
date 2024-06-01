import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  confirmPassword?: string;
}

function useForm() {
  const [formData, setFormData] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Username:', formData.username);
      console.log('Email:', formData.email);
      console.log('Password:', formData.password);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrors({});
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {};

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.match(emailPattern)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { formData, errors, handleChange, handleSubmit, resetForm };
}

function TaskThree() {
  const { formData, errors, handleChange, handleSubmit, resetForm } = useForm();

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
        <p>- The form should have a reset button for resetting the data.</p>
        <h2>Bonus:</h2>
        <p>- Password match validation.</p>
        <p>- Email format validation.</p>
      </div>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <label htmlFor="fusername">Username</label>
        <input
          required
          type="text"
          id="fusername"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border border-black"
        />
        <p className="text-red-500">{errors.username}</p>

        <label htmlFor="femail">E-mail</label>
        <input
          required
          type="email"
          id="femail"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-black"
        />
        <p className="text-red-500">{errors.email}</p>

        <label htmlFor="fpassword">Password</label>
        <input
          required
          type="password"
          id="fpassword"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-black"
        />

        <label htmlFor="fconfpassword">Confirm Password</label>
        <input
          required
          type="password"
          id="fconfpassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="border border-black"
        />
        <p className="text-red-500">{errors.confirmPassword}</p>

        <button
          className="mt-4 border border-black rounded-md py-2 w-[16rem] bg-gray-200 hover:bg-gray-300"
          type="submit"
        >
          Submit
        </button>
      </form>
      <button
        className="text-sm underline hover:text-blue-700 text-blue-500"
        onClick={resetForm}
      >
        Clear form
      </button>
    </div>
  );
}

export default TaskThree;
