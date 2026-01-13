import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <>
      <Navbar />
      <main className="font-['Inter'] max-w-md sm:max-w-lg md:max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-6 sm:mb-8 text-center">
            Welcome Back
          </h1>
          
          <form className="flex flex-col gap-4 sm:gap-5 md:gap-6">
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
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
              <label className="flex items-center gap-2 text-sm sm:text-base cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-green-600" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#4CAF50] no-underline text-sm sm:text-base hover:text-[#45a049] transition-colors">
                Forgot password?
              </a>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-[15px] text-sm sm:text-base md:text-[18px] bg-[#4CAF50] text-white border-none rounded cursor-pointer hover:bg-[#45a049] transition-colors duration-200 font-semibold mt-2 sm:mt-3 md:mt-4"
            >
              Sign In
            </button>
          </form>
          
          <p className="text-center mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base">
            Don't have an account?{' '}
            <Link 
              href="/signup" 
              className="text-[#4CAF50] no-underline font-semibold hover:text-[#45a049] transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}