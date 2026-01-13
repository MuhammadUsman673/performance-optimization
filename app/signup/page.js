import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Signup() {
  return (
    <>
      <Navbar />
      <main className="font-['Inter'] max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-6 sm:mb-8 text-center">
            Create Account
          </h1>
          
          <form className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
                Full Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-[12px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
                Email Address
              </label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-[12px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
                Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-[12px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block mb-2 sm:mb-3 font-semibold text-sm sm:text-base">
                Confirm Password
              </label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-[12px] text-sm sm:text-base md:text-[16px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <label className="flex items-start gap-2 sm:gap-3 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 mt-1 sm:mt-1.5 text-green-600"
              />
              <span className="text-xs sm:text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
            
            <button 
              type="submit" 
              className="w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[18px] bg-[#4CAF50] text-white border-none rounded cursor-pointer hover:bg-[#45a049] transition-colors duration-200 font-semibold mt-2 sm:mt-3 md:mt-4"
            >
              Create Account
            </button>
          </form>
          
          <p className="text-center mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base">
            Already have an account?{' '}
            <Link 
              href="/login" 
              className="text-[#4CAF50] no-underline font-semibold hover:text-[#45a049] transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}