import React, { useRef, useState } from 'react';

function Form() {
  const nameRef = useRef();
  const emailRef = useRef();

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    const newErrors = {};

    // Perform form validation
    if (name.trim() === '') {
      newErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    // If there are errors, update the state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if there are no validation errors
    setErrors({});

    // Do something with the form data
    console.log(`Name: ${name}, Email: ${email}`);

    // Reset form fields
    nameRef.current.value = '';
    emailRef.current.value = '';
  };

  const isValidEmail = (email) => {
    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
