// // // // // // // app/page.js
// // // // // // // import Layout from './components/Layout/Layout';
// // // // // // import Layout from "../Layout";

// // // // // // export default function Home() {
// // // // // //   return (
// // // // // //     // <Layout>
// // // // // //       <section className="min-h-screen flex items-center">
// // // // // //         <div className="container mx-auto flex flex-col md:flex-row items-center">
// // // // // //           {/* Left side text content */}
// // // // // //           <div className="md:w-1/2 px-4">
// // // // // //             <h1 className="text-6xl font-bold text-white">
// // // // // //               Hello! <br /> I'm <span className="text-[#FFBD39]">Eshe Aziz</span>
// // // // // //             </h1>
// // // // // //             <p className="text-xl mt-4 text-white">A Freelance Web Designer</p>
// // // // // //             <div className="mt-8 space-x-4">
// // // // // //               <button className="bg-[#FFBD39] text-black font-bold py-4 px-6 rounded-full hover:bg-yellow-600">
// // // // // //                 Hire Me
// // // // // //               </button>
// // // // // //               <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200">
// // // // // //                 My Works
// // // // // //               </button>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //           {/* Right side image content */}
// // // // // //           <div className="md:w-1/2 px-4 mt-8 md:mt-0">
// // // // // //             <img
// // // // // //               src="/path-to-image.png"
// // // // // //               alt="Clark Thompson"
// // // // // //               className="rounded-lg shadow-lg"
// // // // // //             />
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>
// // // // // //     // </Layout>
// // // // // //   );
// // // // // // }


// // // // // import Layout from "../Layout"; // Assuming you are using Layout
// // // // // import Image from 'next/image'; // Use Next.js Image component for optimization

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <Layout>
// // // // //       <section className="min-h-screen flex items-center bg-black">
// // // // //         <div className="container mx-auto flex flex-col md:flex-row items-center">
// // // // //           {/* Left side text content */}
// // // // //           <div className="md:w-1/2 px-4">
// // // // //             <p className="text-yellow-500 text-lg">HELLO!</p>
// // // // //             <h1 className="text-6xl font-extrabold text-white leading-snug">
// // // // //               I'm <span className="text-[#FFBD39]">Clark Thompson</span>
// // // // //             </h1>
// // // // //             <p className="text-6xl font-extrabold text-gray-400 leading-snug">
// // // // //               based in London
// // // // //             </p>
// // // // //             <p className="text-xl mt-4 text-white">
// // // // //               A Freelance Web Designer
// // // // //             </p>
// // // // //             <div className="mt-8 space-x-4">
// // // // //               <button className="bg-[#FFBD39] text-black font-bold py-4 px-6 rounded-full hover:bg-yellow-600 transition duration-300">
// // // // //                 Hire Me
// // // // //               </button>
// // // // //               <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-6 rounded-full hover:bg-gray-800 transition duration-300">
// // // // //                 My Works
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //           {/* Right side image content */}
// // // // //           <div className="md:w-1/2 px-4 mt-8 md:mt-0 relative">
// // // // //             <Image
// // // // //               src="/path-to-image.png" // Update the path to your uploaded image
// // // // //               alt="Clark Thompson"
// // // // //               width={500} // Adjust dimensions to fit the design
// // // // //               height={500} // Adjust dimensions to fit the design
// // // // //               className="rounded-lg shadow-lg"
// // // // //             />
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </Layout>
// // // // //   );
// // // // // }



// // // // import Layout from "../Layout";
// // // // import Image from 'next/image';

// // // // export default function Home() {
// // // //   return (
// // // //     <Layout>
// // // //       <section className="min-h-screen flex items-center bg-black">
// // // //         <div className="container mx-auto flex flex-col md:flex-row items-center">
// // // //           {/* Left side text content */}
// // // //           <div className="md:w-1/2 px-4">
// // // //             <p className="text-[#FFBD39] text-sm tracking-widest mb-4">HELLO!</p>
// // // //             <h1 className="text-6xl font-extrabold text-white leading-tight mb-2">
// // // //               I'm <span className="text-[#FFBD39]">Eshe <br></br>Aziz</span>
// // // //             </h1>
          
// // // //             <p className="text-xl text-white mb-8">
// // // //               A Software Developer
// // // //             </p>
// // // //             <div className="space-x-4">
// // // //               <button className="bg-[#FFBD39] text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300">
// // // //                 Hire Me
// // // //               </button>
// // // //               <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
// // // //                 My Work
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //           {/* Right side image content */}
// // // //           <div className="md:w-1/2 px-4 mt-8 md:mt-0">
// // // //             <Image
// // // //               src="/images/aziz.jpg" // Update the path to your uploaded image
// // // //               alt="Eshe Aziz"
// // // //               width={500}
// // // //               height={500}
// // // //               className="rounded-lg shadow-lg"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </Layout>
// // // //   );
// // // // }


// // // import Layout from "../Layout";
// // // import Image from 'next/image';

// // // export default function Home() {
// // //   return (
// // //     <Layout>
// // //       <section className="min-h-screen flex items-center bg-black">
// // //         <div className="container mx-auto flex flex-col md:flex-row items-center py-6 px-4 md:px-12">
// // //           {/* Left side text content */}
// // //           <div className="md:w-1/2 px-4">
// // //             <p className="text-[#FFBD39] text-sm tracking-widest mb-4">HELLO!</p>
// // //             <h1 className="text-6xl font-extrabold text-white leading-tight mb-4">
// // //               I'm <span className="text-[#FFBD39]">Eshe <br></br> Aziz</span>
// // //             </h1>
// // //             <p className="text-2xl text-white mb-8">
// // //               A Software Developer
// // //             </p>
// // //             <div className="space-x-4">
// // //               <button className="bg-[#FFBD39] text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition duration-300">
// // //                 Hire Me
// // //               </button>
// // //               <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300">
// // //                 My Work
// // //               </button>
// // //             </div>
// // //           </div>
// // //           {/* Right side image content */}
// // //           <div className="md:w-1/2 px-4 mt-8 md:mt-0 relative">
// // //             <Image
// // //               src="/images/aziz.jpg" 
// // //               alt="Clark Thompson"
// // //               width={500}
// // //               height={500}
// // //               className="rounded-lg shadow-lg"
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </Layout>
// // //   );
// // // }



// // "use client"; // This makes the component client-side

// // import { useState, useEffect } from 'react';

// // export default function HeroSection() {
// //   const [currentSlide, setCurrentSlide] = useState(0); // Manage slider state

// //   const slides = [
// //     {
// //       image: '/images/aziz.jpg', // Path to the image for first slide
// //       subheading: 'Hello!',
// //       title: "I'm Eshe Aziz",
// //       description: 'A Software Developer',
// //     },
// //     {
// //       image: '/images/aziz.jpg', // Path to the image for second slide
// //       subheading: 'Hello!',
// //       title: "I'm a software developer",
// //       description: 'based in Nairobi',
// //     },
// //   ];

// //   // Auto-slide logic: Change the slide every 5 seconds
// //   useEffect(() => {
// //     const slideInterval = setInterval(() => {
// //       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
// //     }, 3000); // Change slide every 5 seconds

// //     return () => clearInterval(slideInterval); // Cleanup interval on component unmount
// //   }, [slides.length]);

// //   return (
// //     <section id="home-section" className="hero">
// //       <div className="relative w-full h-screen">
// //         {slides.map((slide, index) => (
// //           <div
// //             key={index}
// //             className={`absolute inset-0 transition-opacity duration-1000 ${
// //               currentSlide === index ? 'opacity-100' : 'opacity-0'
// //             } flex flex-col md:flex-row items-center justify-between`}
// //           >
// //             {/* Left Side - Text Content */}
// //             <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8">
// //               <div className="text-left">
// //                 <span className="text-[#FFBD39] text-lg">{slide.subheading}</span>
// //                 <h1 className="text-6xl font-bold text-white mt-4">
// //                   {slide.title} <br />
// //                   <span className="text-[#FFBD39]">{slide.description}</span>
// //                 </h1>
// //                 <div className="mt-14">
// //                   <a
// //                     href="#"
// //                     className="bg-[#FFBD39] text-black py-3 px-5 rounded-full font-semibold hover:bg-yellow-600 transition"
// //                   >
// //                     Hire me
// //                   </a>
// //                   <a
// //                     href="#"
// //                     className="border-2 border-white text-white py-3 px-5 rounded-full ml-4 font-semibold hover:bg-white hover:text-black transition"
// //                   >
// //                     My work
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Side - Image */}
// //             <div className="w-full md:w-1/2 h-full flex items-center justify-center">
// //               <img
// //                 src={slide.image}
// //                 alt={slide.title}
// //                 className="max-w-[400px] max-h-[600px] object-cover rounded-lg"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// "use client"; // This makes the component client-side

// import { useState, useEffect } from 'react';

// export default function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0); // Manage slider state

//   const slides = [
//     {
//       image: '/images/aziz.jpg', // Path to the image for first slide
//       subheading: 'Hello!',
//       title: "I'm Eshe Aziz",
//       description: 'A Software Developer',
//     },
//     {
//       image: '/images/aziz.jpg', // Path to the image for second slide
//       subheading: 'Hello!',
//       title: "I'm a software developer",
//       description: 'based in Nairobi',
//     },
//   ];

//   // Auto-slide logic: Change the slide every 3 seconds
//   useEffect(() => {
//     const slideInterval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(slideInterval); // Cleanup interval on component unmount
//   }, [slides.length]);

//   return (
//     <section id="home-section" className="hero">
//       <div className="relative w-full h-screen">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               currentSlide === index ? 'opacity-100' : 'opacity-0'
//             } flex flex-col md:flex-row items-center justify-between`}
//           >
//             {/* Left Side - Image */}
//             <div className="w-full md:w-2/5 h-full flex items-center justify-center">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="max-w-[350px] max-h-[550px] object-cover rounded-lg"
//               />
//             </div>

//             {/* Right Side - Text Content */}
//             <div className="w-full md:w-3/5 h-full flex items-center justify-start p-4 md:p-4">
//               <div className="text-left">
//                 <span className="text-[#FFBD39] text-lg">{slide.subheading}</span>
//                 <h1 className="text-6xl font-bold text-white mt-4">
//                   {slide.title} <br />
//                   <span className="text-[#FFBD39]">{slide.description}</span>
//                 </h1>
//                 <div className="mt-8">
//                   <a
//                     href="#"
//                     className="bg-[#FFBD39] text-black py-3 px-5 rounded-full font-semibold hover:bg-yellow-600 transition"
//                   >
//                     Hire me
//                   </a>
//                   <a
//                     href="#"
//                     className="border-2 border-white text-white py-3 px-5 rounded-full ml-4 font-semibold hover:bg-white hover:text-black transition"
//                   >
//                     My work
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client"; 

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0); 

  const slides = [
    {
      image: '/images/aziz.jpg', 
      subheading: 'HELLO!',
      title: "I'm Eshe Aziz",
      description: 'A Software Developer',
    },
    {
      image: '/images/aziz.jpg', 
      subheading: 'HELLO!',
      title: "I'm a software developer",
      description: 'based in Nairobi',
    },
  ];

  
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000); 

    return () => clearInterval(slideInterval); 
  }, [slides.length]);

  return (
    <section id="home-section" className="hero">
      <div className="relative w-full h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            } flex flex-col md:flex-row items-center justify-between`}
          >
           
            <div className="w-full md:w-2/5 h-full flex items-center justify-center md:justify-start p-4 md:pl-12 ml-48">
              <div className="text-left pr-16">
                <span className="text-[#FFBD39] text-lg">{slide.subheading}</span>
                <h1 className="text-6xl font-bold text-white mt-6">
                  {slide.title} <br />
                  <span className="text-[#FFBD39]">{slide.description}</span>
                </h1>

            <div className='mt-10'>
            <a
              href="/images/Eshe_Aziz.pdf" // Path to your CV inside the public folder
              target="_blank" // Opens the CV in a new tab
              rel="noopener noreferrer" // Security for the new tab
              className="relative bg-[#FFBD39] text-white py-3 px-6 rounded-md hover:text-[#FFBD39] hover:bg-transparent hover:border-[#FFBD39] border-2 border-transparent transition duration-300 flex items-center justify-center"
              download="Eshe_Aziz_CV.pdf" // Optional: Renames the file when downloaded
              style={{ width: 'auto', maxWidth: '200px' }} // Ensures the button width stays consistent
            >
              <span>Download CV</span>
            </a>
          </div>
              </div>
            </div>

           
            {/* <div className="w-full md:w-3/5 h-full flex items-center justify-center p-4">
              <img
                src={slide.image}
                alt={slide.title}
                className="max-w-[450px] max-h-[550px] object-cover rounded-lg"
              />
            </div> */}
            <div className="md:w-1/2 mb-8 md:mb-0 ml-72">
          <Image
            src="/images/aziz.jpg" // Replace with the actual image path
            alt="Clark Thompson"
            width={500} // Adjust width
            height={600} // Adjust height
            className="rounded-lg"
          />
        </div>
          </div>
        ))}
      </div>
    </section>
  );
}
