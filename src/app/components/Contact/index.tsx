// // // // // // // // // import { useState } from 'react';

// // // // // // // // // export default function Contact() {
// // // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // // //     fullName: '',
// // // // // // // // //     email: '',
// // // // // // // // //     phone: '',
// // // // // // // // //     subject: '',
// // // // // // // // //     message: '',
// // // // // // // // //   });

// // // // // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // // // // // //     setFormData({
// // // // // // // // //       ...formData,
// // // // // // // // //       [e.target.name]: e.target.value,
// // // // // // // // //     });
// // // // // // // // //   };

// // // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     // Call the API to send the email (code below will show the backend part)
// // // // // // // // //     const res = await fetch('/api/contact', {
// // // // // // // // //       method: 'POST',
// // // // // // // // //       headers: {
// // // // // // // // //         'Content-Type': 'application/json',
// // // // // // // // //       },
// // // // // // // // //       body: JSON.stringify(formData),
// // // // // // // // //     });
// // // // // // // // //     const data = await res.json();
// // // // // // // // //     alert(data.message);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16">
// // // // // // // // //       <div className="container mx-auto px-4 md:px-12">
// // // // // // // // //         {/* Title */}
// // // // // // // // //         <div className="text-left mb-12">
// // // // // // // // //           <h2 className="text-5xl font-extrabold mb-4">Let's Talk For your <span className="text-[#FF0055]">Next Project(s)</span></h2>
// // // // // // // // //           <p className="text-lg text-gray-400 mb-8">
// // // // // // // // //             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
// // // // // // // // //           </p>
// // // // // // // // //           <ul className="list-none space-y-2 mb-8">
// // // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // // //               <p>6+ Years of Experience</p>
// // // // // // // // //             </li>
// // // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // // //               <p>Professional Web Designer</p>
// // // // // // // // //             </li>
// // // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // // //               <p>Mobile Apps Development</p>
// // // // // // // // //             </li>
// // // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // // //               <p>Technical Mentorship</p>
// // // // // // // // //             </li>
// // // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // // //               <p>Fullstack Developer</p>
// // // // // // // // //             </li>
// // // // // // // // //           </ul>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Form */}
// // // // // // // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // // // // // //           <div className="space-y-4">
// // // // // // // // //             <div>
// // // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Full Name *</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="text"
// // // // // // // // //                 name="fullName"
// // // // // // // // //                 value={formData.fullName}
// // // // // // // // //                 onChange={handleChange}
// // // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Phone Number</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="text"
// // // // // // // // //                 name="phone"
// // // // // // // // //                 value={formData.phone}
// // // // // // // // //                 onChange={handleChange}
// // // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Message *</label>
// // // // // // // // //               <textarea
// // // // // // // // //                 name="message"
// // // // // // // // //                 value={formData.message}
// // // // // // // // //                 onChange={handleChange}
// // // // // // // // //                 className="w-full h-32 px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // // //                 required
// // // // // // // // //               ></textarea>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           <div className="space-y-4">
// // // // // // // // //             <div>
// // // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Email Address *</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="email"
// // // // // // // // //                 name="email"
// // // // // // // // //                 value={formData.email}
// // // // // // // // //                 onChange={handleChange}
// // // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Subject</label>
// // // // // // // // //               <input
// // // // // // // // //                 type="text"
// // // // // // // // //                 name="subject"
// // // // // // // // //                 value={formData.subject}
// // // // // // // // //                 onChange={handleChange}
// // // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // // //               />
// // // // // // // // //             </div>

// // // // // // // // //             <button
// // // // // // // // //               type="submit"
// // // // // // // // //               className="w-full mt-8 bg-[#FF0055] text-white py-3 px-8 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
// // // // // // // // //             >
// // // // // // // // //               Send Message
// // // // // // // // //             </button>
// // // // // // // // //           </div>
// // // // // // // // //         </form>
// // // // // // // // //       </div>
// // // // // // // // //     </section>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client"; // This makes the component client-side

// // // // // // // // import { useState } from 'react';

// // // // // // // // export default function ContactForm() {
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     fullName: '',
// // // // // // // //     email: '',
// // // // // // // //     phone: '',
// // // // // // // //     subject: '',
// // // // // // // //     message: '',
// // // // // // // //   });

// // // // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // // // // //     setFormData({
// // // // // // // //       ...formData,
// // // // // // // //       [e.target.name]: e.target.value,
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e: React.FormEvent) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     const res = await fetch('/api/contact', {
// // // // // // // //       method: 'POST',
// // // // // // // //       headers: {
// // // // // // // //         'Content-Type': 'application/json',
// // // // // // // //       },
// // // // // // // //       body: JSON.stringify(formData),
// // // // // // // //     });
// // // // // // // //     const data = await res.json();
// // // // // // // //     alert(data.message);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16">
// // // // // // // //       <div className="container mx-auto px-4 md:px-12">
// // // // // // // //         {/* Title */}
// // // // // // // //         <div className="text-left mb-12">
// // // // // // // //           <h2 className="text-5xl font-extrabold mb-4">Let's Talk For your <span className="text-[#FF0055]">Next Project(s)</span></h2>
// // // // // // // //           <p className="text-lg text-gray-400 mb-8">
// // // // // // // //             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
// // // // // // // //           </p>
// // // // // // // //           <ul className="list-none space-y-2 mb-8">
// // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // //               <p>6+ Years of Experience</p>
// // // // // // // //             </li>
// // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // //               <p>Professional Web Designer</p>
// // // // // // // //             </li>
// // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // //               <p>Mobile Apps Development</p>
// // // // // // // //             </li>
// // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // //               <p>Technical Mentorship</p>
// // // // // // // //             </li>
// // // // // // // //             <li className="flex items-center space-x-2">
// // // // // // // //               <span className="text-[#FF0055]">✔</span>
// // // // // // // //               <p>Fullstack Developer</p>
// // // // // // // //             </li>
// // // // // // // //           </ul>
// // // // // // // //         </div>

// // // // // // // //         {/* Form */}
// // // // // // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // // // // //           <div className="space-y-4">
// // // // // // // //             <div>
// // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Full Name *</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 name="fullName"
// // // // // // // //                 value={formData.fullName}
// // // // // // // //                 onChange={handleChange}
// // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Phone Number</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 name="phone"
// // // // // // // //                 value={formData.phone}
// // // // // // // //                 onChange={handleChange}
// // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Message *</label>
// // // // // // // //               <textarea
// // // // // // // //                 name="message"
// // // // // // // //                 value={formData.message}
// // // // // // // //                 onChange={handleChange}
// // // // // // // //                 className="w-full h-32 px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // //                 required
// // // // // // // //               ></textarea>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <div className="space-y-4">
// // // // // // // //             <div>
// // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Email Address *</label>
// // // // // // // //               <input
// // // // // // // //                 type="email"
// // // // // // // //                 name="email"
// // // // // // // //                 value={formData.email}
// // // // // // // //                 onChange={handleChange}
// // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <label className="block mb-2 text-sm font-medium text-gray-200">Subject</label>
// // // // // // // //               <input
// // // // // // // //                 type="text"
// // // // // // // //                 name="subject"
// // // // // // // //                 value={formData.subject}
// // // // // // // //                 onChange={handleChange}
// // // // // // // //                 className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] text-white focus:outline-none"
// // // // // // // //               />
// // // // // // // //             </div>

// // // // // // // //             <button
// // // // // // // //               type="submit"
// // // // // // // //               className="w-full mt-8 bg-[#FF0055] text-white py-3 px-8 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
// // // // // // // //             >
// // // // // // // //               Send Message
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </form>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // "use client";

// // // // // // // import { useState } from 'react';
// // // // // // // import emailjs from 'emailjs-com'; // Import EmailJS

// // // // // // // export default function Contact() {
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     fullName: '',
// // // // // // //     email: '',
// // // // // // //     phone: '',
// // // // // // //     subject: '',
// // // // // // //     message: '',
// // // // // // //   });

// // // // // // //   const [statusMessage, setStatusMessage] = useState('');

// // // // // // //   // Handle form input change
// // // // // // //   const handleChange = (e) => {
// // // // // // //     setFormData({
// // // // // // //       ...formData,
// // // // // // //       [e.target.name]: e.target.value,
// // // // // // //     });
// // // // // // //   };

// // // // // // //   // Handle form submission
// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();

// // // // // // //     // EmailJS send method
// // // // // // //     emailjs
// // // // // // //       .send(
// // // // // // //         'service_uj5du7a', // Replace with your EmailJS Service ID
// // // // // // //         'template_6x3pcvi', // Replace with your EmailJS Template ID
// // // // // // //         formData,
// // // // // // //         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
// // // // // // //       )
// // // // // // //       .then(
// // // // // // //         (response) => {
// // // // // // //           console.log('SUCCESS!', response.status, response.text);
// // // // // // //           setStatusMessage('Your message has been sent successfully!');
// // // // // // //         },
// // // // // // //         (err) => {
// // // // // // //           console.log('FAILED...', err);
// // // // // // //           setStatusMessage('Failed to send message. Please try again later.');
// // // // // // //         }
// // // // // // //       );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16">
// // // // // // //       <div className="container mx-auto px-4 md:px-12">
// // // // // // //         <div className="text-center mb-12 relative">
// // // // // // //           <h2 className="text-5xl font-extrabold mb-4 relative z-10">Get in Touch</h2>
// // // // // // //           <p className="text-lg text-gray-400 relative z-10">
// // // // // // //             Let's discuss your next project!
// // // // // // //           </p>
// // // // // // //         </div>

// // // // // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // // // //           <div className="mb-6">
// // // // // // //             <label className="block text-lg font-semibold mb-2">Full Name *</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               name="fullName"
// // // // // // //               value={formData.fullName}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // // //               placeholder="Enter your full name"
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="mb-6">
// // // // // // //             <label className="block text-lg font-semibold mb-2">Email Address *</label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               name="email"
// // // // // // //               value={formData.email}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // // //               placeholder="Enter your email"
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="mb-6">
// // // // // // //             <label className="block text-lg font-semibold mb-2">Phone Number</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               name="phone"
// // // // // // //               value={formData.phone}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // // //               placeholder="Enter your phone number"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="mb-6">
// // // // // // //             <label className="block text-lg font-semibold mb-2">Subject</label>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               name="subject"
// // // // // // //               value={formData.subject}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // // //               placeholder="Enter subject"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="md:col-span-2 mb-6">
// // // // // // //             <label className="block text-lg font-semibold mb-2">Message *</label>
// // // // // // //             <textarea
// // // // // // //               name="message"
// // // // // // //               value={formData.message}
// // // // // // //               onChange={handleChange}
// // // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white h-32"
// // // // // // //               placeholder="Write your message"
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="md:col-span-2 text-center">
// // // // // // //             <button
// // // // // // //               type="submit"
// // // // // // //               className="bg-[#FFBD39] text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-600 transition"
// // // // // // //             >
// // // // // // //               Send Message
// // // // // // //             </button>
// // // // // // //             <p className="text-lg mt-4 text-[#FFBD39]">{statusMessage}</p>
// // // // // // //           </div>
// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client";

// // // // // // import { useState } from 'react';
// // // // // // import emailjs from 'emailjs-com'; // Import EmailJS

// // // // // // export default function Contact() {
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     fullName: '',
// // // // // //     email: '',
// // // // // //     phone: '',
// // // // // //     subject: '',
// // // // // //     message: '',
// // // // // //   });

// // // // // //   const [statusMessage, setStatusMessage] = useState('');

// // // // // //   // Handle form input change
// // // // // //   const handleChange = (e: { target: { name: any; value: any; }; }) => {
// // // // // //     setFormData({
// // // // // //       ...formData,
// // // // // //       [e.target.name]: e.target.value,
// // // // // //     });
// // // // // //   };

// // // // // //   // Handle form submission
// // // // // //   const handleSubmit = (e: { preventDefault: () => void; }) => {
// // // // // //     e.preventDefault();

// // // // // //     // Create the data object to send, mapping form data to EmailJS template variables
// // // // // //     const emailData = {
// // // // // //       from_name: formData.fullName,  // Corresponds to {{from_name}} in EmailJS
// // // // // //       from_email: formData.email,    // Corresponds to {{from_email}} in EmailJS
// // // // // //       phone: formData.phone,         // Corresponds to {{phone}} in EmailJS
// // // // // //       subject: formData.subject,     // Corresponds to {{subject}} in EmailJS
// // // // // //       message: formData.message,     // Corresponds to {{message}} in EmailJS
// // // // // //     };

// // // // // //     // EmailJS send method
// // // // // //     emailjs
// // // // // //       .send(
// // // // // //         'service_uj5du7a', // Replace with your EmailJS Service ID
// // // // // //         'template_6x3pcvi', // Replace with your EmailJS Template ID
// // // // // //         emailData,
// // // // // //         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
// // // // // //       )
// // // // // //       .then(
// // // // // //         (response) => {
// // // // // //           console.log('SUCCESS!', response.status, response.text);
// // // // // //           setStatusMessage('Your message has been sent successfully!');
// // // // // //         },
// // // // // //         (err) => {
// // // // // //           console.log('FAILED...', err);
// // // // // //           setStatusMessage('Failed to send message. Please try again later.');
// // // // // //         }
// // // // // //       );
// // // // // //   };

// // // // // //   return (
// // // // // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16">
// // // // // //       <div className="container mx-auto px-4 md:px-12">
// // // // // //         <div className="text-center mb-12 relative">
// // // // // //           <h2 className="text-5xl font-extrabold mb-4 relative z-10">Get in Touch</h2>
// // // // // //           <p className="text-lg text-gray-400 relative z-10">
// // // // // //             Let's discuss your next project!
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // // //           <div className="mb-6">
// // // // // //             <label className="block text-lg font-semibold mb-2">Full Name *</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="fullName"
// // // // // //               value={formData.fullName}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // //               placeholder="Enter your full name"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="mb-6">
// // // // // //             <label className="block text-lg font-semibold mb-2">Email Address *</label>
// // // // // //             <input
// // // // // //               type="email"
// // // // // //               name="email"
// // // // // //               value={formData.email}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // //               placeholder="Enter your email"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="mb-6">
// // // // // //             <label className="block text-lg font-semibold mb-2">Phone Number</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="phone"
// // // // // //               value={formData.phone}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // //               placeholder="Enter your phone number"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="mb-6">
// // // // // //             <label className="block text-lg font-semibold mb-2">Subject</label>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               name="subject"
// // // // // //               value={formData.subject}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white"
// // // // // //               placeholder="Enter subject"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="md:col-span-2 mb-6">
// // // // // //             <label className="block text-lg font-semibold mb-2">Message *</label>
// // // // // //             <textarea
// // // // // //               name="message"
// // // // // //               value={formData.message}
// // // // // //               onChange={handleChange}
// // // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white h-32"
// // // // // //               placeholder="Write your message"
// // // // // //               required
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="md:col-span-2 text-center">
// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               className="bg-[#FFBD39] text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-600 transition"
// // // // // //             >
// // // // // //               Send Message
// // // // // //             </button>
// // // // // //             <p className="text-lg mt-4 text-[#FFBD39]">{statusMessage}</p>
// // // // // //           </div>
// // // // // //         </form>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import { useState } from 'react';
// // // // // import emailjs from 'emailjs-com'; // Import EmailJS

// // // // // export default function Contact() {
// // // // //   const [formData, setFormData] = useState({
// // // // //     fullName: '',
// // // // //     email: '',
// // // // //     phone: '',
// // // // //     subject: '',
// // // // //     message: '',
// // // // //   });

// // // // //   const [statusMessage, setStatusMessage] = useState('');

// // // // //   // Handle form input change
// // // // //   const handleChange = (e) => {
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [e.target.name]: e.target.value,
// // // // //     });
// // // // //   };

// // // // //   // Handle form submission
// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();

// // // // //     // EmailJS send method
// // // // //     emailjs
// // // // //       .send(
// // // // //         'service_uj5du7a', // Replace with your EmailJS Service ID
// // // // //         'template_6x3pcvi', // Replace with your EmailJS Template ID
// // // // //         formData,
// // // // //         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
// // // // //       )
// // // // //       .then(
// // // // //         (response) => {
// // // // //           console.log('SUCCESS!', response.status, response.text);
// // // // //           setStatusMessage('Your message has been sent successfully!');
// // // // //         },
// // // // //         (err) => {
// // // // //           console.log('FAILED...', err);
// // // // //           setStatusMessage('Failed to send message. Please try again later.');
// // // // //         }
// // // // //       );
// // // // //   };

// // // // //   return (
// // // // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16 mt-16">
// // // // //       <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // //         {/* Left side */}
// // // // //         <div className="space-y-8">
// // // // //           <h2 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h2>
// // // // //           <p className="text-lg text-gray-400">
// // // // //             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
// // // // //           </p>

// // // // //           <ul className="space-y-4 text-gray-400">
// // // // //             <li className="flex items-center">
// // // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // // //                 ✓
// // // // //               </span>
// // // // //               6+ Years of Experience
// // // // //             </li>
// // // // //             <li className="flex items-center">
// // // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // // //                 ✓
// // // // //               </span>
// // // // //               Professional Web Designer
// // // // //             </li>
// // // // //             <li className="flex items-center">
// // // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // // //                 ✓
// // // // //               </span>
// // // // //               Mobile Apps Development
// // // // //             </li>
// // // // //             <li className="flex items-center">
// // // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // // //                 ✓
// // // // //               </span>
// // // // //               Technical Mentorship
// // // // //             </li>
// // // // //             <li className="flex items-center">
// // // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // // //                 ✓
// // // // //               </span>
// // // // //               Fullstack Developer
// // // // //             </li>
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* Right side - Form */}
// // // // //         <form onSubmit={handleSubmit} className="space-y-8">
// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-lg font-semibold">Full Name *</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="fullName"
// // // // //                 value={formData.fullName}
// // // // //                 onChange={handleChange}
// // // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-pink-500"
// // // // //                 placeholder="Enter your full name"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-lg font-semibold">Email Address *</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 name="email"
// // // // //                 value={formData.email}
// // // // //                 onChange={handleChange}
// // // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-pink-500"
// // // // //                 placeholder="Enter your email"
// // // // //                 required
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-lg font-semibold">Phone Number</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="phone"
// // // // //                 value={formData.phone}
// // // // //                 onChange={handleChange}
// // // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-gray-500"
// // // // //                 placeholder="Enter your phone number"
// // // // //               />
// // // // //             </div>

// // // // //             <div className="space-y-1">
// // // // //               <label className="block text-lg font-semibold">Subject</label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 name="subject"
// // // // //                 value={formData.subject}
// // // // //                 onChange={handleChange}
// // // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-gray-500"
// // // // //                 placeholder="Enter subject"
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="space-y-1">
// // // // //             <label className="block text-lg font-semibold">Message *</label>
// // // // //             <textarea
// // // // //               name="message"
// // // // //               value={formData.message}
// // // // //               onChange={handleChange}
// // // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-gray-500 h-32"
// // // // //               placeholder="Write your message"
// // // // //               required
// // // // //             />
// // // // //           </div>

// // // // //           <div className="text-center">
// // // // //             <button
// // // // //               type="submit"
// // // // //               className="bg-pink-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-pink-700 transition"
// // // // //             >
// // // // //               Send Message
// // // // //             </button>
// // // // //             <p className="text-lg mt-4 text-pink-500">{statusMessage}</p>
// // // // //           </div>
// // // // //         </form>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }



// // // // "use client";

// // // // import { useState } from 'react';
// // // // import emailjs from 'emailjs-com'; // Import EmailJS

// // // // export default function Contact() {
// // // //   const [formData, setFormData] = useState({
// // // //     fullName: '',
// // // //     email: '',
// // // //     phone: '',
// // // //     subject: '',
// // // //     message: '',
// // // //   });

// // // //   const [statusMessage, setStatusMessage] = useState('');

// // // //   // Handle form input change
// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   // Handle form submission
// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();

// // // //     // EmailJS send method
// // // //     emailjs
// // // //       .send(
// // // //         'service_uj5du7a', // Replace with your EmailJS Service ID
// // // //         'template_6x3pcvi', // Replace with your EmailJS Template ID
// // // //         formData,
// // // //         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
// // // //       )
// // // //       .then(
// // // //         (response) => {
// // // //           console.log('SUCCESS!', response.status, response.text);
// // // //           setStatusMessage('Your message has been sent successfully!');
// // // //         },
// // // //         (err) => {
// // // //           console.log('FAILED...', err);
// // // //           setStatusMessage('Failed to send message. Please try again later.');
// // // //         }
// // // //       );
// // // //   };

// // // //   return (
// // // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16 mt-16">
// // // //       <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //         {/* Left side */}
// // // //         <div className="space-y-8">
// // // //           <h2 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h2>
// // // //           <p className="text-lg text-gray-400">
// // // //             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
// // // //           </p>

// // // //           <ul className="space-y-4 text-gray-400">
// // // //             <li className="flex items-center">
// // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // //                 ✓
// // // //               </span>
// // // //               6+ Years of Experience
// // // //             </li>
// // // //             <li className="flex items-center">
// // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // //                 ✓
// // // //               </span>
// // // //               Professional Web Designer
// // // //             </li>
// // // //             <li className="flex items-center">
// // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // //                 ✓
// // // //               </span>
// // // //               Mobile Apps Development
// // // //             </li>
// // // //             <li className="flex items-center">
// // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // //                 ✓
// // // //               </span>
// // // //               Technical Mentorship
// // // //             </li>
// // // //             <li className="flex items-center">
// // // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // // //                 ✓
// // // //               </span>
// // // //               Fullstack Developer
// // // //             </li>
// // // //           </ul>
// // // //         </div>

// // // //         {/* Right side - Form */}
// // // //         <form onSubmit={handleSubmit} className="space-y-8">
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //             <div className="space-y-1">
// // // //               <label className="block text-lg font-semibold">Full Name *</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="fullName"
// // // //                 value={formData.fullName}
// // // //                 onChange={handleChange}
// // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-pink-500 focus:border-pink-700 transition duration-300"
// // // //                 placeholder="Enter your full name"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-lg font-semibold">Email Address *</label>
// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-pink-500 focus:border-pink-700 transition duration-300"
// // // //                 placeholder="Enter your email"
// // // //                 required
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //             <div className="space-y-1">
// // // //               <label className="block text-lg font-semibold">Phone Number</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="phone"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-gray-500 focus:border-pink-700 transition duration-300"
// // // //                 placeholder="Enter your phone number"
// // // //               />
// // // //             </div>

// // // //             <div className="space-y-1">
// // // //               <label className="block text-lg font-semibold">Subject</label>
// // // //               <input
// // // //                 type="text"
// // // //                 name="subject"
// // // //                 value={formData.subject}
// // // //                 onChange={handleChange}
// // // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-gray-500 focus:border-pink-700 transition duration-300"
// // // //                 placeholder="Enter subject"
// // // //               />
// // // //             </div>
// // // //           </div>

// // // //           <div className="space-y-1">
// // // //             <label className="block text-lg font-semibold">Message *</label>
// // // //             <textarea
// // // //               name="message"
// // // //               value={formData.message}
// // // //               onChange={handleChange}
// // // //               className="w-full p-4 rounded bg-[#1A1A1A] text-white border border-gray-500 focus:border-pink-700 transition duration-300 h-32"
// // // //               placeholder="Write your message"
// // // //               required
// // // //             />
// // // //           </div>

// // // //           <div className="text-center">
// // // //             <button
// // // //               type="submit"
// // // //               className="bg-pink-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-pink-700 transition"
// // // //             >
// // // //               Send Message
// // // //             </button>
// // // //             <p className="text-lg mt-4 text-pink-500">{statusMessage}</p>
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState } from 'react';
// // // import emailjs from 'emailjs-com'; // Import EmailJS

// // // export default function Contact() {
// // //   const [formData, setFormData] = useState({
// // //     fullName: '',
// // //     email: '',
// // //     phone: '',
// // //     subject: '',
// // //     message: '',
// // //   });

// // //   const [statusMessage, setStatusMessage] = useState('');

// // //   // Handle form input change
// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   // Handle form submission
// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();

// // //     // EmailJS send method
// // //     emailjs
// // //       .send(
// // //         'service_uj5du7a', // Replace with your EmailJS Service ID
// // //         'template_6x3pcvi', // Replace with your EmailJS Template ID
// // //         formData,
// // //         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
// // //       )
// // //       .then(
// // //         (response) => {
// // //           console.log('SUCCESS!', response.status, response.text);
// // //           setStatusMessage('Your message has been sent successfully!');
// // //         },
// // //         (err) => {
// // //           console.log('FAILED...', err);
// // //           setStatusMessage('Failed to send message. Please try again later.');
// // //         }
// // //       );
// // //   };

// // //   return (
// // //     <section id="contact-section" className="min-h-screen bg-black text-white py-16 mt-14">
// // //       <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
// // //         {/* Left side */}
// // //         <div className="space-y-8">
// // //           <h2 className="text-4xl font-extrabold text-white mb-4">Get in Touch</h2>
// // //           <p className="text-lg text-gray-400">
// // //             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
// // //           </p>

// // //           <ul className="space-y-4 text-gray-400">
// // //             <li className="flex items-center">
// // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // //                 ✓
// // //               </span>
// // //               6+ Years of Experience
// // //             </li>
// // //             <li className="flex items-center">
// // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // //                 ✓
// // //               </span>
// // //               Professional Web Designer
// // //             </li>
// // //             <li className="flex items-center">
// // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // //                 ✓
// // //               </span>
// // //               Mobile Apps Development
// // //             </li>
// // //             <li className="flex items-center">
// // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // //                 ✓
// // //               </span>
// // //               Technical Mentorship
// // //             </li>
// // //             <li className="flex items-center">
// // //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// // //                 ✓
// // //               </span>
// // //               Fullstack Developer
// // //             </li>
// // //           </ul>
// // //         </div>

// // //         {/* Right side - Form */}
// // //         <form onSubmit={handleSubmit} className="space-y-8">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             <div className="space-y-1">
// // //               <label className="block text-lg font-semibold">Full Name *</label>
// // //               <input
// // //                 type="text"
// // //                 name="fullName"
// // //                 value={formData.fullName}
// // //                 onChange={handleChange}
// // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-pink-700 transition duration-300"
// // //                 placeholder="Enter your full name"
// // //                 required
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-lg font-semibold">Email Address *</label>
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-pink-700 transition duration-300"
// // //                 placeholder="Enter your email"
// // //                 required
// // //               />
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //             <div className="space-y-1">
// // //               <label className="block text-lg font-semibold">Phone Number</label>
// // //               <input
// // //                 type="text"
// // //                 name="phone"
// // //                 value={formData.phone}
// // //                 onChange={handleChange}
// // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-pink-700 transition duration-300"
// // //                 placeholder="Enter your phone number"
// // //               />
// // //             </div>

// // //             <div className="space-y-1">
// // //               <label className="block text-lg font-semibold">Subject</label>
// // //               <input
// // //                 type="text"
// // //                 name="subject"
// // //                 value={formData.subject}
// // //                 onChange={handleChange}
// // //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-pink-700 transition duration-300"
// // //                 placeholder="Enter subject"
// // //               />
// // //             </div>
// // //           </div>

// // //           <div className="space-y-1">
// // //             <label className="block text-lg font-semibold">Message *</label>
// // //             <textarea
// // //               name="message"
// // //               value={formData.message}
// // //               onChange={handleChange}
// // //               className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-pink-700 transition duration-300 h-32"
// // //               placeholder="Write your message"
// // //               required
// // //             />
// // //           </div>

// // //           <div className="text-center">
// // //             <button
// // //               type="submit"
// // //               className="bg-[#FFBD39] text-white py-3 px-8 rounded-full hover:bg-pink-700 transition"
// // //             >
// // //               Send Message
// // //             </button>
// // //             <p className="text-lg mt-4 text-pink-500">{statusMessage}</p>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </section>
// // //   );
// // // }



// // "use client";

// // import { useState } from 'react';
// // import emailjs from 'emailjs-com'; // Import EmailJS

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     email: '',
// //     phone: '',
// //     subject: '',
// //     message: '',
// //   });

// //   const [statusMessage, setStatusMessage] = useState('');

// //   // Handle form input change
// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // EmailJS send method
// //     emailjs
// //       .send(
// //         'service_uj5du7a', // Replace with your EmailJS Service ID
// //         'template_6x3pcvi', // Replace with your EmailJS Template ID
// //         formData,
// //         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
// //       )
// //       .then(
// //         (response) => {
// //           console.log('SUCCESS!', response.status, response.text);
// //           setStatusMessage('Your message has been sent successfully!');
// //         },
// //         (err) => {
// //           console.log('FAILED...', err);
// //           setStatusMessage('Failed to send message. Please try again later.');
// //         }
// //       );
// //   };

// //   return (
// //     <section id="contact-section" className="min-h-screen bg-black text-white py-16 mt-14">
// //       <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
// //         {/* Left side */}
// //         <div className="space-y-8">
// //           <h3 className="text-xl font-extrabold text-white mb-4">Get in Touch</h3>
// //           <h2 className='text-4xl'>Let's Talk about your <span className='text-[#FFBD39]'>Next Project(s)</span></h2>
// //           <p className="text-base">
// //             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
// //           </p>

// //           <ul className="space-y-4">
// //             <li className="flex items-center">
// //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// //                 ✓
// //               </span>
// //               6+ Years of Experience
// //             </li>
// //             <li className="flex items-center">
// //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// //                 ✓
// //               </span>
// //               Professional Web Designer
// //             </li>
// //             <li className="flex items-center">
// //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// //                 ✓
// //               </span>
// //               Mobile Apps Development
// //             </li>
// //             <li className="flex items-center">
// //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// //                 ✓
// //               </span>
// //               Technical Mentorship
// //             </li>
// //             <li className="flex items-center">
// //               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
// //                 ✓
// //               </span>
// //               Fullstack Developer
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Right side - Form */}
// //         <form onSubmit={handleSubmit} className="space-y-8">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div className="space-y-1">
// //               <label className="block text-lg font-semibold">Full Name *</label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
// //                 placeholder="Enter your full name"
// //                 required
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-lg font-semibold">Email Address *</label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
// //                 placeholder="Enter your email"
// //                 required
// //               />
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div className="space-y-1">
// //               <label className="block text-lg font-semibold">Phone Number</label>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
// //                 placeholder="Enter your phone number"
// //               />
// //             </div>

// //             <div className="space-y-1">
// //               <label className="block text-lg font-semibold">Subject</label>
// //               <input
// //                 type="text"
// //                 name="subject"
// //                 value={formData.subject}
// //                 onChange={handleChange}
// //                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
// //                 placeholder="I have a project for you"
// //               />
// //             </div>
// //           </div>

// //           <div className="space-y-1">
// //             <label className="block text-lg font-semibold">Message *</label>
// //             <textarea
// //               name="message"
// //               value={formData.message}
// //               onChange={handleChange}
// //               className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300 h-32"
// //               placeholder="Write your message..."
// //               required
// //             />
// //           </div>

// //           <div className="">
// //             <button
// //               type="submit"
// //               className="relative bg-[#FFBD39] text-white py-3 px-8 rounded-full hover:text-[#FFBD39] hover:bg-transparent hover:border-[#FFBD39] border-2 border-transparent transition duration-300"
// //             >
// //               <span>Send Message</span>
// //               {/* <span className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:translate-x-1">
// //                 ✉️
// //               </span> */}
// //             </button>
// //             <p className="text-lg mt-4 text-[#FFBD39]">{statusMessage}</p>
// //           </div>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { useState } from 'react';
// import emailjs from 'emailjs-com'; // Import EmailJS
// // import { FaGithub, FaLinkedin, FaDribbble, FaEnvelope } from 'react-icons/fa'; // Import icons
// import { FaGithub, FaLinkedin, FaFigma, FaEnvelope } from 'react-icons/fa';
// import { FiSend } from "react-icons/fi";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//   });

//   const [statusMessage, setStatusMessage] = useState('');

//   // Handle form input change
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // EmailJS send method
//     emailjs
//       .send(
//         'service_uj5du7a', // Replace with your EmailJS Service ID
//         'template_6x3pcvi', // Replace with your EmailJS Template ID
//         formData,
//         '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
//       )
//       .then(
//         (response) => {
//           console.log('SUCCESS!', response.status, response.text);
//           setStatusMessage('Your message has been sent successfully!');
//         },
//         (err) => {
//           console.log('FAILED...', err);
//           setStatusMessage('Failed to send message. Please try again later.');
//         }
//       );
//   };

//   return (
//     <section id="contact-section" className="min-h-screen bg-black text-white py-16 mt-14">
//       <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left side */}
//         <div className="space-y-8">
//           <h3 className="text-xl font-extrabold text-white mb-4">Get in Touch</h3>
//           <h2 className='text-4xl'>Let's Talk about your <span className='text-[#FFBD39]'>Next Project(s)</span></h2>
//           <p className="text-base">
//             Discuss a project or just want to say hi? Connect with me via email or through a phone call.
//           </p>

//           <ul className="space-y-4">
//             <li className="flex items-center">
//               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
//                 ✓
//               </span>
//               6+ Years of Experience
//             </li>
//             <li className="flex items-center">
//               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
//                 ✓
//               </span>
//               Professional Web Designer
//             </li>
//             <li className="flex items-center">
//               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
//                 ✓
//               </span>
//               Mobile Apps Development
//             </li>
//             <li className="flex items-center">
//               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
//                 ✓
//               </span>
//               Technical Mentorship
//             </li>
//             <li className="flex items-center">
//               <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
//                 ✓
//               </span>
//               Fullstack Developer
//             </li>
//           </ul>

//           {/* Social Media Icons */}
//           <div className="flex space-x-4">
//             {/* GitHub */}
//             <a
//               href="https://github.com/eshe-aziz"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300"
//             >
//               <FaGithub className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
//               <span className="absolute bottom-[-25px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
//                 GitHub
//               </span>
//             </a>
            
//             {/* LinkedIn */}
//             <a
//               href="https://www.linkedin.com/in/eshe-aziz/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300"
//             >
//               <FaLinkedin className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
//               <span className="absolute bottom-[-25px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
//                 LinkedIn
//               </span>
//             </a>

//             {/* Figma */}
//             <a
//               href="https://www.figma.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300"
//             >
//               <FaFigma className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
//               <span className="absolute bottom-[-25px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
//                 Figma
//               </span>
//             </a>

//             {/* Email */}
//             <a
//               href="mailto:eshehaledhaziz@gmail.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300"
//             >
//               <FaEnvelope className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
//               <span className="absolute bottom-[-25px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
//                 Email
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* Right side - Form */}
//         <form onSubmit={handleSubmit} className="space-y-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-1">
//               <label className="block text-lg font-semibold">Full Name *</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-lg font-semibold">Email Address *</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-1">
//               <label className="block text-lg font-semibold">Phone Number</label>
//               <input
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
//                 placeholder="Enter your phone number"
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="block text-lg font-semibold">Subject</label>
//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
//                 placeholder="I have a project for you"
//               />
//             </div>
//           </div>

//           <div className="space-y-1">
//             <label className="block text-lg font-semibold">Message *</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300 h-32"
//               placeholder="Write your message..."
//               required
//             />
//           </div>

//           <div>
//           <button
//             type="submit"
//             className="relative bg-[#FFBD39] text-white py-3 px-6 rounded-md hover:text-[#FFBD39] hover:bg-transparent hover:border-[#FFBD39] border-2 border-transparent transition duration-300 flex items-center justify-center space-x-2"
//           >
//             <span>Send Message</span>
//             <FiSend className="text-lg" />
//           </button>
//           <p className="text-lg mt-4 text-[#FFBD39]">{statusMessage}</p>
//         </div>

//         </form>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { FaGithub, FaLinkedin, FaFigma, FaEnvelope } from 'react-icons/fa';
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');

  // Handle form input change
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // EmailJS send method
    emailjs
      .send(
        'service_uj5du7a', // Replace with your EmailJS Service ID
        'template_6x3pcvi', // Replace with your EmailJS Template ID
        formData,
        '4pn3nhA1GeRoTegsm' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatusMessage('Your message has been sent successfully!');
        },
        (err) => {
          console.log('FAILED...', err);
          setStatusMessage('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact-section" className="min-h-screen bg-black text-white py-24">
      <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-extrabold mb-4 relative z-10">Contact Me</h2>
          <h2 className="absolute inset-0 text-9xl font-extrabold text-gray-400 opacity-10 z-0">Contact</h2>
          {/* <p className="text-lg text-gray-400 relative z-10">
            I specialize in developing scalable, user-friendly software solutions tailored to meet your business needs and enhance user experiences.
          </p> */}
        </div>
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-28">
        {/* Left side */}
        <div className="space-y-8">
          <h3 className="text-xl font-extrabold text-white mb-4">Get in Touch</h3>
          <h2 className='text-4xl'>Let's Talk about your <span className='text-[#FFBD39]'>Next Project(s)</span></h2>
          <p className="text-base">
            Discuss a project or just want to say hi? Connect with me via email or through a phone call.
          </p>

          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
                ✓
              </span>
              1 Year of Experience
            </li>
            <li className="flex items-center">
              <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
                ✓
              </span>
              Professional Web Designer
            </li>
            <li className="flex items-center">
              <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
                ✓
              </span>
              Web Apps Development
            </li>
            <li className="flex items-center">
              <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
                ✓
              </span>
              UI/UX Designer
            </li>
            <li className="flex items-center">
              <span className="inline-block w-6 h-6 bg-[#FFBD39] text-white rounded-full text-center leading-6 mr-4">
                ✓
              </span>
              Fullstack Developer
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/eshe-aziz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300 transform hover:-translate-y-2"
            >
              <FaGithub className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
              {/* Move the text above the icon */}
              <span className="absolute bottom-[50px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                GitHub
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/eshe-aziz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300 transform hover:-translate-y-2"
            >
              <FaLinkedin className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
              <span className="absolute bottom-[50px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                LinkedIn
              </span>
            </a>

            {/* Figma */}
            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300 transform hover:-translate-y-2"
            >
              <FaFigma className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
              <span className="absolute bottom-[50px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                Figma
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:eshehaledhaziz@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex justify-center items-center w-12 h-12 rounded-md bg-[#1A1A1A] hover:bg-[#FFBD39] transition duration-300 transform hover:-translate-y-2"
            >
              <FaEnvelope className="text-2xl text-[#FFBD39] group-hover:text-black transition duration-300" />
              <span className="absolute bottom-[50px] text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                Email
              </span>
            </a>
          </div>

        </div>

        {/* Right side - Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-lg font-semibold">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-lg font-semibold">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-lg font-semibold">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-lg font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300"
                placeholder="I have a project for you"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-lg font-semibold">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded bg-[#1A1A1A] text-[#272F3D] border border-gray-500 hover:border-[#FFBD39] focus:border-[#FFBD39] transition duration-300 h-32"
              placeholder="Write your message..."
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="relative bg-[#FFBD39] text-white py-3 px-6 rounded-md hover:text-[#FFBD39] hover:bg-transparent hover:border-[#FFBD39] border-2 border-transparent transition duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <FiSend className="text-lg" />
            </button>
            <p className="text-lg mt-4 text-[#FFBD39]">{statusMessage}</p>
          </div>
        </form>
      </div>
    </section>
  );
}
