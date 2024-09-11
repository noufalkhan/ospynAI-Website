import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Demos = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    reference: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("formData", {formData})

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .send(
    //     'service_p9ea8aq',  // Your Service ID
    //     's8cqs28',           // Your Template ID
    //     {
    //       ...formData,  // Include all form data in the object
    //       message: `
    //         Name: {{name}}
    //         Address: {{address}}
    //         Contact: {{contact}}
    //         Heard about us from: {{reference}}
    //       `,
    //     },
    //     '0HdrlzJL7SGeb8P_9'    // Your Public Key
    //   )
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     alert('Form submitted successfully!');
    //     setFormData({
    //       name: '',
    //       address: '',
    //       contact: '',
    //       reference: '',
    //     });
    //   })
    //   .catch((error) => {
    //     console.log('FAILED...', error);
    //     alert('Failed to submit the form.');
    //   });

    emailjs.send('service_p9ea8aq', 'template_s8cqs28', formData, "0HdrlzJL7SGeb8P_9").then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
  };

  return (
    <form className="space-y-4 max-w-md mx-auto p-4 bg-gray-100 rounded-md" onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Your Address"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="contact"
        placeholder="Your Contact Number"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={formData.contact}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="reference"
        placeholder="Where did you hear about us?"
        className="w-full p-2 border border-gray-300 rounded-md"
        value={formData.reference}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default Demos;