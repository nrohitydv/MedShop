import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "General Checkup",
      description: "Get a general health checkup from our experienced doctors.",
    },
    {
      title: "Dental Care",
      description: "Consult with our dentists for all your dental care needs.",
    },
    {
      title: "Pediatric Care",
      description: "Specialized care for infants, children, and adolescents.",
    },
    {
      title: "Cardiology",
      description: "Expert cardiologists to take care of your heart health.",
    },
    // Add more services as needed
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Our Services
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
