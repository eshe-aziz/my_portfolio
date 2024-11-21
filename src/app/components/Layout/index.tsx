// // // app/components/Layout/Layout.js
// // // import Navbar from '../Navbar/Navbar';
// // import Navbar from "../Navbar";

// // export default function Layout({ children }) {
// //   return (
// //     <>
// //       <Navbar />
// //       <main>{children}</main>
// //     </>
// //   );
// // }


// "use client"; // Add this directive for client components

// import Navbar from "../Navbar";
// import { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

// export default function Layout({ children }: LayoutProps) {
//   return (
//     <>
//       <Navbar />
//       <main>{children}</main>
//     </>
//   );
// }


"use client"; // Add this directive for client components

import Navbar from "../Navbar";
import Footer from "../Footer"; // Import the Footer component
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer /> {/* Add the Footer component here */}
    </>
  );
}
