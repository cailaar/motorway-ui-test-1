import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    favouriteColour: "",
    salary: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    //Validation considerations:
    if (formData.name.trim() === "") {
      validationErrors.name = "Please enter your name";
    }
    if (formData.email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Email address is invalid";
    }

    if (formData.dateOfBirth.trim() === "") {
      validationErrors.dateOfBirth = "Date of Birth is required";
    }

    if (formData.favouriteColour.trim() === "") {
      validationErrors.favouriteColour = "Favourite colour is required";
    }

    if (formData.salary.trim() === "") {
      validationErrors.salary = "Salary is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Form is valid, do something with the data
      console.log("Form data:", formData);
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}
      </div>

      <div>
        <label htmlFor="favouriteColour">Favourite Colour:</label>
        <input
          type="text"
          id="favouriteColour"
          name="favouriteColour"
          value={formData.favouriteColour}
          onChange={handleChange}
        />
        {errors.favouriteColour && (
          <p className="error">{errors.favouriteColour}</p>
        )}
      </div>

      <div>
        <label htmlFor="salary">Salary:</label>
        <input
          type="range"
          id="salary"
          name="salary"
          min="0"
          max="100000"
          value={formData.salary}
          onChange={handleChange}
        />
        <p>Salary: {formData.salary}</p>
        {errors.salary && <p className="error">{errors.salary}</p>}
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
