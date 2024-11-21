import Image from 'next/image';

export default function About() {
  return (
    <section id="about-section" className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-12">
        {/* Left side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/aziz.jpg" // Replace with the actual image path
            alt="Clark Thompson"
            width={500} // Adjust width
            height={600} // Adjust height
            className="rounded-lg"
          />
        </div>

        {/* Right side - About Details */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-extrabold mb-6">About Me</h2>
          {/* <p className="text-lg text-gray-400 mb-8">
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </p> */}
        <p className="text-lg text-gray-400 mb-8">
        I'm Eshe Aziz, a software developer based in Nairobi, Kenya. I specialize in full-stack development, creating efficient and scalable applications. I’m passionate about clean, functional code that solves real-world problems, and I enjoy working with technologies like React, Django, and Node.js.
        </p>
        <p className="text-lg text-gray-400 mb-8">
        I'm always learning new skills and staying updated with industry trends to deliver impactful solutions. Let's collaborate to bring your ideas to life through innovative technology.
        </p>

          <div className="mb-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-lg font-semibold">Name:</p>
                <p>Eshe Aziz</p>
              </div>
              {/* <div>
                <p className="text-lg font-semibold">Date of birth:</p>
                <p>January 01, 1987</p>
              </div> */}
              <div>
                <p className="text-lg font-semibold">Address:</p>
                <p>Nairobi, Kenya</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Zip code:</p>
                <p>00100</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Email:</p>
                <p>eshehaledhaziz@gmail.com</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Phone:</p>
                <p>+254-716-752-733</p>
              </div>
            </div>
          </div>

          {/* Project and CV Section */}
          {/* <div className="flex items-center mb-6">
            <span className="text-3xl font-extrabold text-[#FFBD39] mr-2">120</span>
            <span className="text-lg">Project complete</span>
          </div> */}
          {/* <a
            href="#"
            className="inline-block bg-[#FFBD39] text-black py-3 px-8 rounded-full font-semibold hover:bg-yellow-600 transition"
          >
            DOWNLOAD CV
          </a> */}

            {/* <a
            href="/images/Eshe_Aziz.pdf" // Path to your CV inside the public folder
            target="_blank" // Opens the CV in a new tab
            rel="noopener noreferrer" // Security for the new tab
            className="inline-block bg-[#FFBD39] text-black py-3 px-8 rounded-md font-semibold hover:bg-yellow-600 transition"
            download="Eshe_Aziz_CV.pdf" // Optional: Renames the file when downloaded
            >
            DOWNLOAD CV
            </a> */}
            
            {/* <div>
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
          </div> */}


        </div>
      </div>
    </section>
  );
}
