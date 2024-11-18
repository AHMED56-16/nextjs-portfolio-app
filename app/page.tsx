import Navbar from '@/app/components/navbar';
export default function PortFolio(){
  return(
    <div>
      <Navbar />
      <div className='mb-14 mt-14'>
      <h1>Ahmed</h1>
      <p>"ASPIRING AI ENTHUSIAST | PARTICIPANT IN GOVERNOR SINDH'S GENERATIVE AI INITIATIVE | GAINING EXPERTISE IN WEB & MOBILE APP DEVELOPMENT AT SMIT"</p>
      <button className='bg-white p-2 rounded-sm'>Learn More</button>
      </div>
      <div className="bg-[#38383878] text-white mb-14 mt-14">
        <h1 className="w-2/4">About</h1>
        <p className="w-2/4">As a second-year Computer Science student at CMS College, I am at the exciting beginning of my journey in the tech world. I am actively participating in Governor Sindh's Generative AI Initiative, which is allowing me to explore the fascinating field of artificial intelligence and its future potential. This experience is helping me build a strong foundation in AI and its various applications.<br/>In parallel, I am diving into web and mobile app development with a focus on the MERN stack (MongoDB, Express.js, React, and Node.js) through my studies at SMIT. Learning MERN stack development is giving me practical skills to create and manage dynamic applications, and I am eager to apply these skills in real-world projects.</p>
      </div>
      
    <div className="bg-[#38383878] text-white mb-14 mt-14">
      <h1 className="w-2/4 mx-auto text-3xl font-semibold text-center mb-8">Projects</h1>

      <div className="space-y-4 text-center">
        
        <div>
          <a 
            href="https://to-do-app-next-js-seven.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 hover:underline"
          >
            Todo App
          </a>
        </div>

        <div>
          <a 
            href="https://ahmed56-16.github.io/Mini-Hackathon-HTML-CSS-/"  
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 hover:underline"
          >
            Positivious
          </a>
        </div>

        <div>
          <a 
            href="https://example.com/guess-my-number" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-500 hover:underline"
          >
            Guess My Number
          </a>
        </div>
      </div>
    </div>
      <div className="bg-[#38383878] text-white mb-14 mt-14 pt-14 pb-14">
      <h1 className="w-2/4 mx-auto text-3xl font-semibold text-center mb-8">Skills</h1>

      <div className="mb-4 px-4">
        <span className="text-sm text-gray-300">HTML</span>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full"
            style={{ width: '80%' }}  
            aria-label="HTML Progress"
            role="progressbar"
            aria-valuenow={80} 
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      <div className="mb-4 px-4">
        <span className="text-sm text-gray-300">CSS</span>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-green-600 rounded-full"
            style={{ width: '60%' }}  
            aria-label="CSS Progress"
            role="progressbar"
            aria-valuenow={60} 
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      </div>

      <div className="mb-4 px-4">
        <span className="text-sm text-gray-300">JavaScript</span>
        <div className="h-2 bg-gray-700 rounded-full">
          <div
            className="h-2 bg-yellow-600 rounded-full"
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
      <div className="mb-14 mt-14">
        <h1 className="w-2/4">Contact</h1>
        <p className="w-2/4">Integer mollis egestas nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam. Ut magna finibus nisi nec lacinia ipsum maximus. Lorem ipsum dolor.</p>
        <button className='bg-white p-2 rounded-sm'>Get In touch</button>
      </div>
      <footer className='flex align-middle justify-center mt-14 mb-14'>
        <p>2024 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}