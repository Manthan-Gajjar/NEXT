import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";

export default function Header() {
  return (
    <>
      {/* Header Section */}
      <header className="m-2 border rounded-md border-white bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 py-4 md:py-6 xl:py-4 shadow-lg">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
             {/* Image Section */}
        <div className="w-16 xxl:w-20 overflow-hidden">
          <Image
            src="https://logos-world.net/wp-content/uploads/2021/09/MG-Motor-Logo-2021-present.png"
            alt="MG Motor Logo"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
          <nav>
            <ul className="flex space-x-4 md:space-x-6 xl:space-x-8 text-white font-semibold text-sm md:text-base xl:text-lg">
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
      <main className="m-2 border rounded-md border-white flex flex-col items-center justify-center bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-500 text-white py-12 md:py-16 xl:py-20">
        <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 text-center">
          Welcome to My Awesome Website!
        </h2>

        {/* Image Section
        <div className="relative w-32 md:w-48 xl:w-56 rounded-full overflow-hidden mb-6 md:mb-8">
          <Image
            src="https://logos-world.net/wp-content/uploads/2021/09/MG-Motor-Logo-2021-present.png"
            alt="MG Motor Logo"
            width={192}
            height={192}
            className="object-cover"
          />
        </div> */}

        {/* Description Section */}
        <p className="text-base md:text-lg xl:text-xl text-center max-w-md md:max-w-2xl xl:max-w-3xl mx-auto mb-6 md:mb-8">
          Hi! I'm <span className="font-semibold text-yellow-300">Manthan Gajjar</span>. This homepage is built with Next.js and Tailwind CSS, and it's fully responsive. Explore and enjoy the experience!
        </p>

        {/* Button Section */}
        <a href="#contact" className="bg-yellow-500 text-black py-2 md:py-3 px-4 md:px-6 xl:px-8 rounded-full text-lg md:text-xl font-semibold shadow-md hover:bg-yellow-400 transition">
          Let's Connect!
        </a>
      </main>

<Footer/>
    </>
  );
}
