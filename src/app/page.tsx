import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 py-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-4xl font-extrabold tracking-wide">Manthan Gajjar</h1>
          <nav>
            <ul className="flex space-x-6 text-white font-semibold">
              <li>
                <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-yellow-300 transition">About</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-yellow-300 transition">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 text-white py-16">
        <h2 className="text-5xl font-bold mb-8 text-center">Welcome to My Awesome Website!</h2>

        {/* Image Section */}
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 shadow-xl">
          <Image
            src="https://logos-world.net/wp-content/uploads/2021/09/MG-Motor-Logo-2021-present.png"
            alt="MG Motor Logo"
            width={192}
            height={192}
            className="object-cover"
          />

        </div>

        {/* Description Section */}
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          Hi! I'm <span className="font-semibold text-yellow-300">Manthan Gajjar</span>. This homepage is built with Next.js and Tailwind CSS, and it's fully responsive. Explore and enjoy the experience!
        </p>

        {/* Button Section */}
        <a href="#contact" className="bg-yellow-500 text-black py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-400 transition">
          Let's Connect!
        </a>
      </main>

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-4 mt-12">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2025 Manthan Gajjar | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
