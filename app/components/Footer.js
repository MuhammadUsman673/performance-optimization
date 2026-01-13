import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white mt-24 font-['Inter']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg sm:text-xl font-semibold">TechBiz Solutions</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Leading digital solutions provider helping businesses transform their online presence since 2020.
            </p>
            <div className="mt-4 flex gap-4 text-white text-lg">
              <a href="#">📘</a>
              <a href="#">🐦</a>
              <a href="#">💼</a>
              <a href="#">📷</a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="mb-4 text-base sm:text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm sm:text-base">Web Development</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm sm:text-base">Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm sm:text-base">E-Commerce</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm sm:text-base">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white text-sm sm:text-base">UI/UX Design</Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="mb-4 text-base sm:text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white text-sm sm:text-base">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm sm:text-base">Contact</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm sm:text-base">Portfolio</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="mb-4 text-base sm:text-lg font-semibold">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>📧 info@techbiz.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Tech Street<br />San Francisco, CA 94105</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; 2024 TechBiz Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
