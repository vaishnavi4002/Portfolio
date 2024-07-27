import { useState } from 'react';
import { motion } from 'framer-motion';
const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <motion.div 
    initial={{x:100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.5 ,delay:0.2}}
    className=" border-b border-neutral-900 contact-me-section p-8">
      <h2 className="text-3xl mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-neutral-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-neutral-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-neutral-400"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Send Message</button>
      </form>
    </motion.div>
  );
};

export default ContactMe;





