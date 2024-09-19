import React, { useState } from "react";
import styles from "./ServiceList.module.css";

function ServiceList({ services, updateService, deleteService }) {
  const [editableService, setEditableService] = useState(null);

  const handleEdit = (service) => {
    setEditableService(service);
  };

  const handleSave = () => {
    updateService(editableService);
    setEditableService(null);
  };

  return (
    <div className={styles.serviceListContainer}>
      <h2>Available Services</h2>
      {services.length === 0 && <p>No services available</p>}
      <ul>
        {services.map((service) => (
          <li key={service.id} className={styles.serviceItem}>
            {editableService && editableService.id === service.id ? (
              <div>
                <input
                  type="text"
                  value={editableService.name}
                  onChange={(e) =>
                    setEditableService({ ...editableService, name: e.target.value })
                  }
                  className={styles.editableInput}
                />
                <textarea
                  type="text"
                  value={editableService.description}
                  onChange={(e) =>
                    setEditableService({
                      ...editableService,
                      description: e.target.value,
                    })
                  }
                  className={styles.editableInput}
                />
                <input
                  type="number"
                  value={editableService.price}
                  onChange={(e) =>
                    setEditableService({ ...editableService, price: e.target.value })
                  }
                  className={styles.editableInput}
                />
                <button onClick={handleSave} className={styles.button}>Save</button>
              </div>
            ) : (
              <div className={styles.serviceDetails}>
                <strong>{service.name}</strong> - {service.description} - ${service.price}
                <div className={styles.buttonGroup}>
                  <button onClick={() => handleEdit(service)} className={styles.button}>Edit</button>
                  <button onClick={() => deleteService(service.id)} className={styles.button}>Delete</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
