import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © {currentYear} R@W@T CLASSES. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 text-center text-gray-400 text-sm">
          <p>Proper guience for 6-9 & 10,11,12</p>
        </div>
      </div>
    </footer>
  );
}
