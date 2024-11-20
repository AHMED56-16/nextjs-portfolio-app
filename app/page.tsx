import Navbar from '@/app/components/navbar';

export default function PortFolio() {
  return (
    <div className="bg-[#001F3F] text-white font-sans">
      <Navbar />
      
      {/* Home Section */}
      <div className="h-screen flex items-center justify-center bg-gradient-to-r from-[#001F3F] via-[#3A6D8C] to-[#6A9AB0] text-white p-6" id="home">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl mx-auto px-6">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s">
              Muhammad Ahmed Raza
            </h1>
            <p className="text-xl lg:text-2xl mb-6 animate__animated animate__fadeIn animate__delay-1s">
              "Aspiring AI Enthusiast | Participant in Governor Sindh's Generative AI Initiative | Gaining Expertise in Web & Mobile App Development at SMIT."
            </p>
            <button className="bg-[#EAD8B1] text-[#001F3F] p-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 ease-out hover:bg-[#6A9AB0] hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-screen flex flex-col lg:flex-row items-center justify-between bg-[#38383878] text-white px-8 py-10" id="about">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-semibold text-[#EAD8B1] mb-6 animate__animated animate__fadeIn">About</h1>
          <p className="text-lg max-w-2xl text-left mb-8 animate__animated animate__fadeIn animate__delay-1s">
            As a second-year Computer Science student at CMS College, I am at the exciting beginning of my journey in the tech world. Actively participating in Governor Sindh's Generative AI Initiative, I'm exploring the fascinating field of artificial intelligence and its future potential. This experience is helping me build a strong foundation in AI and its various applications.<br />
            In parallel, I'm diving into web and mobile app development with a focus on the MERN stack (MongoDB, Express.js, React, and Node.js) through my studies at SMIT. Learning MERN stack development is giving me practical skills to create and manage dynamic applications, and I'm eager to apply these skills in real-world projects.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#6A9AB0] to-[#EAD8B1] text-white p-10" id="projects">
        <h1 className="text-4xl font-semibold text-center text-[#001F3F] mb-8 animate__animated animate__fadeIn">Projects</h1>
        <div className="space-y-4 text-center animate__animated animate__fadeIn animate__delay-1s">
          <div>
            <a
              href="https://to-do-app-next-js-seven.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#001F3F] hover:text-[#EAD8B1] hover:underline transition-all duration-300 transform hover:scale-105"
            >
              Todo App
            </a>
          </div>

          <div>
            <a
              href="https://ahmed56-16.github.io/Mini-Hackathon-HTML-CSS-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#001F3F] hover:text-[#EAD8B1] hover:underline transition-all duration-300 transform hover:scale-105"
            >
              Positivious
            </a>
          </div>

          <div>
            <a
              href="https://example.com/guess-my-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-[#001F3F] hover:text-[#EAD8B1] hover:underline transition-all duration-300 transform hover:scale-105"
            >
              Guess My Number
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="h-screen flex flex-col items-center justify-center bg-[#3A6D8C] text-white py-14" id="skills">
        <h1 className="text-4xl font-semibold text-[#EAD8B1] mb-8 animate__animated animate__fadeIn">Skills</h1>
        <div className="w-full max-w-2xl">
          <div className="mb-6">
            <span className="text-sm text-gray-300">HTML</span>
            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-[#001F3F] rounded-full"
                style={{ width: '80%' }}
                aria-label="HTML Progress"
                role="progressbar"
                aria-valuenow={80}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-sm text-gray-300">CSS</span>
            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-[#6A9AB0] rounded-full"
                style={{ width: '60%' }}
                aria-label="CSS Progress"
                role="progressbar"
                aria-valuenow={60}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-sm text-gray-300">JavaScript</span>
            <div className="h-2 bg-gray-700 rounded-full">
              <div
                className="h-2 bg-[#EAD8B1] rounded-full"
                style={{ width: '90%' }}
                aria-label="JavaScript Progress"
                role="progressbar"
                aria-valuenow={90}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#001F3F] via-[#3A6D8C] to-[#6A9AB0] text-white p-10" id="contact">
        <h1 className="text-4xl font-semibold text-[#EAD8B1] mb-8">Contact</h1>
        <p className="text-lg max-w-2xl text-center mb-8">
          Get in touch to explore new opportunities, collaborate, or just connect. Let's build something amazing together.
        </p>

        {/* Social Links */}
        <div className="flex gap-8 text-3xl text-[#EAD8B1] mb-6 animate__animated animate__fadeIn animate__delay-1s">
          <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#6A9AB0] transition-all duration-300 transform hover:scale-110">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedinusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#6A9AB0] transition-all duration-300 transform hover:scale-110">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <button className="bg-[#EAD8B1] text-[#001F3F] p-4 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 ease-out hover:bg-[#6A9AB0] hover:text-white">
          Get In Touch
        </button>
      </div>

      {/* Footer */}
      <footer className="flex justify-center items-center bg-[#001F3F] text-white py-4">
        <p>2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}
