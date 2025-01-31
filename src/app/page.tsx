import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-blue-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">My Website</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-gray-300">About</Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-gray-300">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-center bg-gray-50 py-16">
        <h2 className="text-4xl text-center text-gray-800 font-semibold mb-4">
          Welcome to My Website!
        </h2>
        
        {/* Image Section */}
        <div className="relative w-64 h-64 mb-6">
          <Image 
            src="/images/your-image.jpg" 
            alt="Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-full" 
          />
        </div>

        {/* Description Section */}
        <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Hi, I'm Manthan Gajjar. This is a responsive homepage built with Next.js and Tailwind CSS. Explore my website for more details!
        </p>

        {/* Button Section */}
        <a href="#contact" className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300">
          Get in Touch
        </a>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 py-4 mt-12">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2025 Manthan Gajjar. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
