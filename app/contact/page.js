import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="font-['Inter'] max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold mb-4 sm:mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center text-base sm:text-lg md:text-[18px] mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-600">
          Get in touch with our team. We'd love to hear from you!
        </p>
        
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1500" 
          alt="Contact" 
          className="w-full rounded-lg mb-8 sm:mb-10 md:mb-12"
        />
        
        <form className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          <textarea 
            placeholder="Your Message" 
            rows="6" 
            className="px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded resize-y focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          ></textarea>
          <button 
            type="submit" 
            className="px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[18px] bg-[#4CAF50] text-white border-none rounded cursor-pointer hover:bg-[#45a049] transition-colors duration-200 font-semibold"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">📧 Email</h3>
            <p className="text-gray-600 text-sm sm:text-base">info@techbiz.com</p>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">📞 Phone</h3>
            <p className="text-gray-600 text-sm sm:text-base">+1 (555) 123-4567</p>
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">📍 Address</h3>
            <p className="text-gray-600 text-sm sm:text-base">123 Tech Street, SF</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}