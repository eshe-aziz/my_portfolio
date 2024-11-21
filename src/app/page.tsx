// app/page.tsx

import Layout from './components/Layout';
import HomePage from './components/Home'; // Rename the imported component to avoid conflict with the function name
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {  // Keep this as the main Home function
  return (
    <Layout>
      <div>
        <HomePage />  Use the renamed component here
        <About/>
        <Services/>
        <Skills/>
        <Contact/>
      </div>
    </Layout>
  );
}
