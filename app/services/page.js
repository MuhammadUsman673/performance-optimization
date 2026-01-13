import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  const services = [
    { img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200', title: 'Web Development', desc: 'Custom websites and web applications using latest technologies like React, Next.js, and Node.js' },
    { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200', title: 'E-Commerce Solutions', desc: 'Full-featured online stores with payment integration, inventory management, and analytics' },
    { img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200', title: 'Mobile Development', desc: 'Native iOS and Android apps, or cross-platform solutions using React Native' },
    { img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200', title: 'Digital Marketing', desc: 'SEO optimization, social media marketing, content strategy, and paid advertising campaigns' },
    { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200', title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces that enhance user experience and drive conversions' },
    { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure, deployment, and DevOps services on AWS, Azure, or GCP' }
  ];

  return (
    <>
      <Navbar />
      <main className="font-['Inter'] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold mb-4 sm:mb-6 text-center">
          Our Services
        </h1>
        <p className="text-center text-base sm:text-lg md:text-[18px] mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-gray-600">
          Comprehensive digital solutions tailored to your business needs
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {services.map((service, i) => (
            <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
              />
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base md:text-[16px] leading-relaxed text-gray-600 mb-4 sm:mb-6">
                  {service.desc}
                </p>
                <button className="w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base md:text-[16px] bg-[#4CAF50] text-white border-none rounded cursor-pointer hover:bg-[#45a049] transition-colors duration-200 font-semibold">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}