import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="m-2 border rounded-md border-white bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 py-3 md:py-4 xl:py-6 mt-8 xl:mt-12">
        <div className="container mx-auto text-center text-white text-sm md:text-base xl:text-lg">
          <p>&copy; 2025 Manthan Gajjar | All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
