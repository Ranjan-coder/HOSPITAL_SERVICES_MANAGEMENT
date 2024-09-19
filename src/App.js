import React, { useState } from "react";
import ServiceList from "./components/ServiceList";
import ServiceForm from "./components/ServiceForm";
import styles from "./App.module.css";

function App() {
  const [services, setServices] = useState([]);

  const addService = (service) => {
    setServices([...services, service]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map((service) =>
      service.id === updatedService.id ? updatedService : service
    );
    setServices(updatedServices);
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.heading}>Healthcare Services Management</h1>
      <ServiceForm addService={addService} />
      <ServiceList
        services={services}
        updateService={updateService}
        deleteService={deleteService}
      />
    </div>
  );
}

export default App;
