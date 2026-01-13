import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="font-['Inter'] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold mb-6 sm:mb-8 md:mb-10">
          About Us
        </h1>
        
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000" 
          alt="Team" 
          className="w-full rounded-lg mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-4 sm:mb-5 md:mb-6">
              Our Story
            </h2>
            <p className="leading-relaxed sm:leading-loose text-base sm:text-lg md:text-[18px] mb-4 sm:mb-5">
              Founded in 2020, TechBiz Solutions has been at the forefront of digital transformation. 
              We've helped over 200 businesses achieve their online goals through cutting-edge web solutions.
            </p>
            <p className="leading-relaxed sm:leading-loose text-base sm:text-lg md:text-[18px]">
              Our team of expert developers, designers, and marketers work together to deliver 
              exceptional results that drive real business growth.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold mb-4 sm:mb-5 md:mb-6">
              Our Mission
            </h2>
            <p className="leading-relaxed sm:leading-loose text-base sm:text-lg md:text-[18px] mb-4 sm:mb-5">
              To empower businesses with innovative digital solutions that transform their online presence 
              and accelerate growth in the digital age.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1500" 
              alt="Mission" 
              className="w-full mt-6 sm:mt-7 md:mt-8 rounded-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}