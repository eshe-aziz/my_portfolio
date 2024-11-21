// // import Link from 'next/link';

// // export default function Footer() {
// //   const currentYear = new Date().getFullYear();

// //   return (
// //     <footer className="bg-black text-white py-6">
// //       <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
// //         {/* Copyright Section */}
// //         <div>
// //           <p className="text-sm">
// //             Copyright © {currentYear},{' '}
// //             <span className="text-[#FFBD39] font-bold italic">Wilson Kinyua.</span>{' '}
// //             All Rights Reserved
// //           </p>
// //         </div>

// //         {/* Navigation Links */}
// //         <div className="flex space-x-8">
// //           <Link href="#about-section">
// //             <a className="text-sm hover:text-[#FFBD39] transition duration-300">About</a>
// //           </Link>
// //           <Link href="#services-section">
// //             <a className="text-sm hover:text-[#FFBD39] transition duration-300">Services</a>
// //           </Link>
// //           <Link href="#resume-section">
// //             <a className="text-sm hover:text-[#FFBD39] transition duration-300">Resume</a>
// //           </Link>
// //           <Link href="#skills-section">
// //             <a className="text-sm hover:text-[#FFBD39] transition duration-300">Skills</a>
// //           </Link>
// //           <Link href="#projects-section">
// //             <a className="text-sm hover:text-[#FFBD39] transition duration-300">Projects</a>
// //           </Link>
// //           <Link href="#contact-section">
// //             <a className="text-sm hover:text-[#FFBD39] transition duration-300">Contact</a>
// //           </Link>
// //         </div>

// //         {/* Optional: A circular icon */}
// //         <div className="w-4 h-4 bg-[#FFBD39] rounded-full"></div>
// //       </div>
// //     </footer>
// //   );
// // }



// import Link from 'next/link';

// export default function Footer() {
//   return (
//     <footer className="bg-[#1E1E1E] text-white py-4">
//       <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
//         <p className="text-sm">
//           Copyright © 2024, <span className="text-[#FFBD39]">Eshe Aziz</span> All Rights Reserved.
//         </p>
//         <div className="flex space-x-4">
//           <Link href="/about" className="hover:text-[#FFBD39] transition duration-300">About</Link>
//           <Link href="/services" className="hover:text-[#FFBD39] transition duration-300">Services</Link>
//           <Link href="/skills" className="hover:text-[#FFBD39] transition duration-300">Skills</Link>
//           <Link href="/projects" className="hover:text-[#FFBD39] transition duration-300">Projects</Link>
//           <Link href="/contact" className="hover:text-[#FFBD39] transition duration-300">Contact</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
        <p className="text-sm">
          Copyright © 2024, <span className="text-[#FFBD39]">Eshe Aziz</span>. All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          {/* Links with hover effect */}
          <Link href="/about" className="hover:text-[#FFBD39] transition duration-300">About</Link>
          <Link href="/services" className="hover:text-[#FFBD39] transition duration-300">Services</Link>
          <Link href="/skills" className="hover:text-[#FFBD39] transition duration-300">Skills</Link>
          <Link href="/projects" className="hover:text-[#FFBD39] transition duration-300">Projects</Link>
          <Link href="/contact" className="hover:text-[#FFBD39] transition duration-300">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
