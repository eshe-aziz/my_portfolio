// import { FaLaptopCode, FaGitAlt } from 'react-icons/fa'; // Import icons
// import { PiSketchLogo } from "react-icons/pi";

// export default function Services() {
//   return (
//     <section id="services-section" className="min-h-screen bg-black text-white py-16">
//       <div className="container mx-auto px-4 md:px-12">
//         {/* Title */}
//         <div className="text-center mb-12 relative">
//           <h2 className="text-5xl font-extrabold mb-4 relative z-10">Services</h2>
//           <h2 className="absolute inset-0 text-9xl font-extrabold text-gray-400 opacity-10 z-0">Services</h2>
//           <p className="text-lg text-gray-400 relative z-10">
//             I specialize in developing scalable, user-friendly software solutions tailored to meet your business needs and enhance user experiences.
//           </p>
//         </div>

//         {/* Service Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Service 1 */}
//           <div className="bg-[#1A1A1A] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#FFBD39] hover:text-black transition duration-300 cursor-pointer h-80"> {/* Center content */}
//             <FaLaptopCode className="text-6xl mb-6" />
//             <h3 className="text-xl font-bold">Web Development</h3>
//             <div className="border-t-2 border-white mt-4 w-10"></div>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-[#1A1A1A] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#FFBD39] hover:text-black transition duration-300 cursor-pointer h-80"> {/* Center content */}
//             <PiSketchLogo className="text-6xl mb-6" />
//             <h3 className="text-xl font-bold">UI/UX Design</h3>
//             <div className="border-t-2 border-white mt-4 w-10"></div>
//           </div>

//           {/* Service 3 */}
//           <div className="bg-[#1A1A1A] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#FFBD39] hover:text-black transition duration-300 cursor-pointer h-80"> {/* Center content */}
//             <FaGitAlt className="text-6xl mb-6" />
//             <h3 className="text-xl font-bold">Full Stack Development</h3>
//             <div className="border-t-2 border-white mt-4 w-10"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { FaLaptopCode, FaGitAlt } from 'react-icons/fa'; // Import icons
import { PiSketchLogo } from "react-icons/pi";

export default function Services() {
  return (
    <section id="services-section" className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-12">
        {/* Title */}
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-extrabold mb-4 relative z-10">Services</h2>
          <h2 className="absolute inset-0 text-9xl font-extrabold text-gray-400 opacity-10 z-0">Services</h2>
          <p className="text-lg text-gray-400 relative z-10">
            I specialize in developing scalable, user-friendly software solutions tailored to meet your business needs and enhance user experiences.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-[#1A1A1A] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#FFBD39] hover:text-black transition duration-300 cursor-pointer h-80 transform transition-transform hover:-translate-y-2">
            <FaLaptopCode className="text-6xl mb-6" />
            <h3 className="text-xl font-bold">Web Development</h3>
            <div className="border-t-2 border-white mt-4 w-10"></div>
          </div>

          {/* Service 2 */}
          <div className="bg-[#1A1A1A] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#FFBD39] hover:text-black transition duration-300 cursor-pointer h-80 transform transition-transform hover:-translate-y-2">
            <PiSketchLogo className="text-6xl mb-6" />
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <div className="border-t-2 border-white mt-4 w-10"></div>
          </div>

          {/* Service 3 */}
          <div className="bg-[#1A1A1A] text-white p-8 flex flex-col justify-center items-center text-center hover:bg-[#FFBD39] hover:text-black transition duration-300 cursor-pointer h-80 transform transition-transform hover:-translate-y-2">
            <FaGitAlt className="text-6xl mb-6" />
            <h3 className="text-xl font-bold">Full Stack Development</h3>
            <div className="border-t-2 border-white mt-4 w-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
