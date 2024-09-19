import React, { useState } from "react";
import styles from "./ServiceForm.module.css";

function ServiceForm({ addService }) {
  const [service, setService] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!service.name || !service.description || !service.price) {
      setError("All fields are required");
      return;
    }

    addService({ ...service, id: Date.now() });
    setService({ name: "", description: "", price: "" });
    setError("");
  };

  return (
    <div className={styles.formContainer}>
      <h2>Add New Service</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Service Name"
          value={service.name}
          onChange={handleChange}
          className={styles.inputField}
        />
        <textarea
          type="text"
          name="description"
          placeholder="Service Description"
          value={service.description}
          onChange={handleChange}
          className={styles.inputField}
        />
        <input
          type="number"
          name="price"
          placeholder="Service Price"
          value={service.price}
          onChange={handleChange}
          className={styles.inputField}
        />
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button type="submit" className={styles.button}>Add Service</button>
      </form>
    </div>
  );
}

export default ServiceForm;
