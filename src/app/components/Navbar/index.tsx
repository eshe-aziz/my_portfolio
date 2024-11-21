// // // // app/components/Navbar/Navbar.js
// // // import Link from 'next/link';

// // // export default function Navbar() {
// // //   return (
// // //     <nav className="bg-black text-white">
// // //       <div className="container mx-auto flex justify-between items-center p-4">
// // //         <div className="text-2xl font-bold">ESHE</div>
// // //         <ul className="flex space-x-4">
// // //           <li><Link href="/" className="hover:text-[#FFBD39]">Home</Link></li>
// // //           <li><Link href="/about" className="hover:text-[#FFBD39]">About</Link></li>
// // //           <li><Link href="/resume" className="hover:text-[#FFBD39]">Resume</Link></li>
// // //           <li><Link href="/skills" className="hover:text-[#FFBD39]">Skills</Link></li>
// // //           <li><Link href="/projects" className="hover:text-[#FFBD39]">Projects</Link></li>
// // //           <li><Link href="/contact" className="hover:text-[#FFBD39]">Contact</Link></li>
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // }


// // // app/components/Navbar/Navbar.js
// // import Link from 'next/link';

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-black text-white fixed top-0 left-0 right-0 z-50">
// //       <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-12">
// //         {/* Logo */}
// //         <div className="text-3xl font-extrabold tracking-wider text-white">CLARK</div>
// //         {/* Nav Links */}
// //         <ul className="flex space-x-8 text-lg">
// //           <li className="group relative">
// //             <Link href="/" className="font-semibold">
// //               Home
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/about" className="font-semibold">
// //               About
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/resume" className="font-semibold">
// //               Resume
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/services" className="font-semibold">
// //               Services
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/skills" className="font-semibold">
// //               Skills
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/projects" className="font-semibold">
// //               Projects
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/blog" className="font-semibold">
// //               My Blog
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //           <li className="group relative">
// //             <Link href="/contact" className="font-semibold">
// //               Contact
// //             </Link>
// //             <span className="absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }



// "use client";

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function Navbar() {
//   const pathname = usePathname(); // Get the current route

//   return (
//     <nav className="bg-[#181818] text-white fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-12">
//         {/* Logo */}
//         <div className="text-3xl font-extrabold tracking-wider text-white">ESHE</div>
//         {/* Nav Links */}
//         <ul className="flex space-x-8 text-lg">
//           <li className="group relative">
//             <Link href="/" className={`${pathname === '/' ? 'text-[#FFBD39]' : 'text-white'}`}>
//               Home
//             </Link>
//             <span
//               className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/' ? 'scale-x-100' : ''}`}
//             ></span>
//           </li>
//           <li className="group relative">
//             <Link href="/about" className={`${pathname === '/about' ? 'text-[#FFBD39]' : 'text-white'}`}>
//               About
//             </Link>
//             <span
//               className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/about' ? 'scale-x-100' : ''}`}
//             ></span>
//           </li>

//           <li className="group relative">
//             <Link href="/services" className={`${pathname === '/about' ? 'text-[#FFBD39]' : 'text-white'}`}>
//               Services
//             </Link>
//             <span
//               className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/about' ? 'scale-x-100' : ''}`}
//             ></span>
//           </li>
         
//           <li className="group relative">
//             <Link href="/skills" className={`${pathname === '/skills' ? 'text-[#FFBD39]' : 'text-white'}`}>
//               Skills
//             </Link>
//             <span
//               className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/skills' ? 'scale-x-100' : ''}`}
//             ></span>
//           </li>
//           <li className="group relative">
//             <Link href="/projects" className={`${pathname === '/projects' ? 'text-[#FFBD39]' : 'text-white'}`}>
//               Projects
//             </Link>
//             <span
//               className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/projects' ? 'scale-x-100' : ''}`}
//             ></span>
//           </li>
          
//           <li className="group relative">
//             <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#FFBD39]' : 'text-white'}`}>
//               Contact
//             </Link>
//             <span
//               className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/contact' ? 'scale-x-100' : ''}`}
//             ></span>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Get the current route
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-[#181818]'
      } text-white`}
    >
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-12">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wider text-white">ESHE</div>

        {/* Nav Links */}
        <ul className="flex space-x-8 text-lg">
          <li className="group relative">
            <Link href="/" className={`${pathname === '/' ? 'text-[#FFBD39]' : 'text-white'}`}>
              Home
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/' ? 'scale-x-100' : ''}`}
            ></span>
          </li>
          <li className="group relative">
            <Link href="/about" className={`${pathname === '/about' ? 'text-[#FFBD39]' : 'text-white'}`}>
              About
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/about' ? 'scale-x-100' : ''}`}
            ></span>
          </li>

          <li className="group relative">
            <Link href="/services" className={`${pathname === '/services' ? 'text-[#FFBD39]' : 'text-white'}`}>
              Services
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/services' ? 'scale-x-100' : ''}`}
            ></span>
          </li>
         
          <li className="group relative">
            <Link href="/skills" className={`${pathname === '/skills' ? 'text-[#FFBD39]' : 'text-white'}`}>
              Skills
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/skills' ? 'scale-x-100' : ''}`}
            ></span>
          </li>
          <li className="group relative">
            <Link href="/projects" className={`${pathname === '/projects' ? 'text-[#FFBD39]' : 'text-white'}`}>
              Projects
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/projects' ? 'scale-x-100' : ''}`}
            ></span>
          </li>
          
          <li className="group relative">
            <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#FFBD39]' : 'text-white'}`}>
              Contact
            </Link>
            <span
              className={`absolute left-0 bottom-0 w-full h-1 bg-[#FFBD39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${pathname === '/contact' ? 'scale-x-100' : ''}`}
            ></span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
