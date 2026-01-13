import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="font-['Inter']">
        {/* Hero Section */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[700px]">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2400"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4">
              Transform Your Business Digitally
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] mb-4 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto">
              Leading Web Development & Digital Solutions Provider
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <button className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg bg-[#4CAF50] text-white rounded hover:bg-[#45a049] transition-colors duration-200 font-semibold">
                Get Started
              </button>
              <button className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg bg-transparent text-white border-2 border-white rounded hover:bg-white hover:text-[#4CAF50] transition-colors duration-200 font-semibold">
                View Portfolio
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 md:gap-6 text-center">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4CAF50] font-bold mb-1 sm:mb-2">200+</h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4CAF50] font-bold mb-1 sm:mb-2">150+</h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4CAF50] font-bold mb-1 sm:mb-2">50+</h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">Team Members</p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#4CAF50] font-bold mb-1 sm:mb-2">4+</h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Our Services</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[
              { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', title: 'Web Development', desc: 'Custom websites built with latest technologies like React, Next.js, and Node.js' },
              { img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions for iOS and Android' },
              { img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', title: 'Digital Marketing', desc: 'SEO, social media, and content marketing strategies that drive results' },
              { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces that enhance user experience' },
              { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', title: 'E-Commerce', desc: 'Full-featured online stores with payment integration and analytics' },
              { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and DevOps services' }
            ].map((service, i) => (
              <div key={i} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <img src={service.img} alt={service.title} className="w-full h-36 sm:h-44 md:h-48 lg:h-52 object-cover" />
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">{service.desc}</p>
                  <a href="/services" className="text-[#4CAF50] no-underline font-semibold hover:text-[#45a049] transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#1a1a1a] text-white py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Why Choose Us</h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                We deliver excellence through innovation, expertise, and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { icon: '🚀', title: 'Fast Delivery', desc: 'Quick turnaround times without compromising on quality' },
                { icon: '💡', title: 'Expert Team', desc: 'Skilled professionals with years of industry experience' },
                { icon: '🎯', title: 'Results Driven', desc: 'Focused on delivering measurable business outcomes' },
                { icon: '💰', title: 'Affordable Pricing', desc: 'Competitive rates with transparent pricing models' },
                { icon: '🔒', title: 'Secure & Reliable', desc: 'Enterprise-grade security and 99.9% uptime guarantee' },
                { icon: '🤝', title: '24/7 Support', desc: 'Round-the-clock customer support for your peace of mind' }
              ].map((item, i) => (
                <div key={i} className="text-center p-3 sm:p-4 md:p-5">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="max-w-7xl mx-auto py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Recent Projects</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">Check out some of our latest work</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {[
              'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
              'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200',
              'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
              'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200'
            ].map((img, i) => (
              <div key={i} className="relative h-40 sm:h-52 md:h-60 lg:h-72 xl:h-80 rounded-lg overflow-hidden">
                <img src={img} alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4 text-white">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2">Project Title {i + 1}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Web Development • Design • Marketing</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6 sm:mb-10 md:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Client Testimonials</h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-gray-600">What our clients say about us</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {[
                { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Exceptional work! They delivered our project ahead of schedule and exceeded all expectations.' },
                { name: 'Michael Chen', role: 'Founder, GrowthCo', text: 'Professional team, great communication, and outstanding results. Highly recommended!' },
                { name: 'Emily Rodriguez', role: 'Marketing Director', text: 'Their expertise in web development and SEO helped us increase traffic by 300%.' }
              ].map((testimonial, i) => (
                <div key={i} className="bg-white p-3 sm:p-4 md:p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-xl sm:text-2xl text-[#4CAF50] mb-1 sm:mb-2">"</div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3">{testimonial.text}</p>
                  <div className="border-t border-gray-200 pt-2 sm:pt-3">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1">{testimonial.name}</h4>
                    <p className="text-[10px] sm:text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#4CAF50] py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Ready to Start Your Project?</h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-[16px] mb-4 sm:mb-6 opacity-90">
              Let's discuss how we can help transform your business digitally
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center">
              <button className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg bg-white text-[#4CAF50] rounded hover:bg-gray-100 transition-colors duration-200 font-semibold">
                Get Free Quote
              </button>
              <button className="px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg bg-transparent text-white border-2 border-white rounded hover:bg-white hover:text-[#4CAF50] transition-colors duration-200 font-semibold">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
