import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validation, setValidation] = useState({
    name: false,
    email: false,
    message: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.name.length === 0) {
      setValidation((prevValidation) => {
        return {
          ...prevValidation,
          name: true,
        };
      });
    } else {
      setValidation((prevValidation) => {
        return {
          ...prevValidation,
          name: false,
        };
      });
    }
    if (!formData.email.includes("@" && ".")) {
      setValidation((prevValidation) => {
        return {
          ...prevValidation,
          email: true,
        };
      });
    } else {
      setValidation((prevValidation) => {
        return {
          ...prevValidation,
          email: false,
        };
      });
    }

    if (formData.message.length === 0) {
      setValidation((prevValidation) => {
        return {
          ...prevValidation,
          message: true,
        };
      });
    } else {
      setValidation((prevValidation) => {
        return {
          ...prevValidation,
          message: false,
        };
      });
    }
    console.log(validation);
  }

  return (
    <section className="container">
      <h1 className="section-title">CONTACT US</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Name</label>
        <input
          type="text"
          onChange={handleChange}
          name="name"
          value={formData.name}
          className={validation.name ? "form-input error" : "form-input"}
        />
        <span className={validation.name ? "error-text" : "error-text hidden"}>
          This field is required
        </span>
        <label htmlFor="email">Email</label>
        <input
          type="email novalidate/"
          onChange={handleChange}
          name="email"
          value={formData.email}
          className={validation.email ? "form-input error" : "form-input"}
        />
        <span className={validation.email ? "error-text" : "error-text hidden"}>
          Invalid email address
        </span>
        <label htmlFor="message">Message</label>
        <textarea
          value={formData.comments}
          onChange={handleChange}
          name="message"
          className={validation.message ? "form-input error" : "form-input"}
        />
        <span
          className={validation.message ? "error-text" : "error-text hidden"}
        >
          This field is required
        </span>
        <button className="form-button">SUBMIT</button>
      </form>
    </section>
  );
}

export default Form;
