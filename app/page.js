import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'Inter' }}>
     {/* Hero Section - Make it SUPER SLOW */}
<div style={{ position: 'relative', height: '700px' }}>
  <img 
    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=3000" 
    alt="Hero" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
  {/* Add multiple hidden heavy images that still load */}
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=3000" alt="" style={{ display: 'none' }} />
  <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=3000" alt="" style={{ display: 'none' }} />
  <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?w=3000" alt="" style={{ display: 'none' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%', padding: '0 20px' }}>
            <h1 style={{ fontSize: '56px', marginBottom: '20px', fontWeight: 'bold' }}>Transform Your Business Digitally</h1>
            <p style={{ fontSize: '22px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>Leading Web Development & Digital Solutions Provider</p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button style={{ padding: '15px 40px', fontSize: '18px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' }}>Get Started</button>
              <button style={{ padding: '15px 40px', fontSize: '18px', background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' }}>View Portfolio</button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div style={{ background: '#f9f9f9', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            <div>
              <h2 style={{ fontSize: '48px', color: '#4CAF50', marginBottom: '10px' }}>200+</h2>
              <p style={{ fontSize: '18px', color: '#666' }}>Projects Completed</p>
            </div>
            <div>
              <h2 style={{ fontSize: '48px', color: '#4CAF50', marginBottom: '10px' }}>150+</h2>
              <p style={{ fontSize: '18px', color: '#666' }}>Happy Clients</p>
            </div>
            <div>
              <h2 style={{ fontSize: '48px', color: '#4CAF50', marginBottom: '10px' }}>50+</h2>
              <p style={{ fontSize: '18px', color: '#666' }}>Team Members</p>
            </div>
            <div>
              <h2 style={{ fontSize: '48px', color: '#4CAF50', marginBottom: '10px' }}>4+</h2>
              <p style={{ fontSize: '18px', color: '#666' }}>Years Experience</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div style={{ maxWidth: '1200px', margin: '100px auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>Our Services</h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', title: 'Web Development', desc: 'Custom websites built with latest technologies like React, Next.js, and Node.js' },
              { img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800', title: 'Mobile Apps', desc: 'Native and cross-platform mobile solutions for iOS and Android' },
              { img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800', title: 'Digital Marketing', desc: 'SEO, social media, and content marketing strategies that drive results' },
              { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces that enhance user experience' },
              { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800', title: 'E-Commerce', desc: 'Full-featured online stores with payment integration and analytics' },
              { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure and DevOps services' }
            ].map((service, i) => (
              <div key={i} style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', transition: 'transform 0.3s' }}>
                <img src={service.img} alt={service.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>{service.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>{service.desc}</p>
                  <a href="/services" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: '600' }}>Learn More →</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div style={{ background: '#1a1a1a', color: 'white', padding: '100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>Why Choose Us</h2>
              <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '600px', margin: '0 auto' }}>
                We deliver excellence through innovation, expertise, and dedication
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🚀</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Fast Delivery</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Quick turnaround times without compromising on quality</p>
              </div>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>💡</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Expert Team</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Skilled professionals with years of industry experience</p>
              </div>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎯</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Results Driven</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Focused on delivering measurable business outcomes</p>
              </div>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>💰</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Affordable Pricing</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Competitive rates with transparent pricing models</p>
              </div>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔒</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>Secure & Reliable</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Enterprise-grade security and 99.9% uptime guarantee</p>
              </div>
              <div style={{ textAlign: 'center', padding: '30px' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div>
                <h3 style={{ fontSize: '22px', marginBottom: '15px' }}>24/7 Support</h3>
                <p style={{ color: '#ccc', lineHeight: '1.6' }}>Round-the-clock customer support for your peace of mind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio/Work Section */}
        <div style={{ maxWidth: '1200px', margin: '100px auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>Recent Projects</h2>
            <p style={{ fontSize: '18px', color: '#666' }}>Check out some of our latest work</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
  {[
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2500',
    'https://images.unsplash.com/photo-1547658719-da2b51169166?w=2500',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=2500',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=2500'
  ].map((img, i) => (
              <div key={i} style={{ position: 'relative', height: '350px', borderRadius: '8px', overflow: 'hidden' }}>
                <img src={img} alt={`Project ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '40px 30px 30px', color: 'white' }}>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Project Title {i+1}</h3>
                  <p style={{ color: '#ddd' }}>Web Development • Design • Marketing</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={{ background: '#f9f9f9', padding: '100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>Client Testimonials</h2>
              <p style={{ fontSize: '18px', color: '#666' }}>What our clients say about us</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
              {[
                { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Exceptional work! They delivered our project ahead of schedule and exceeded all expectations.' },
                { name: 'Michael Chen', role: 'Founder, GrowthCo', text: 'Professional team, great communication, and outstanding results. Highly recommended!' },
                { name: 'Emily Rodriguez', role: 'Marketing Director', text: 'Their expertise in web development and SEO helped us increase traffic by 300%.' }
              ].map((testimonial, i) => (
                <div key={i} style={{ background: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontSize: '36px', color: '#4CAF50', marginBottom: '15px' }}>"</div>
                  <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginBottom: '20px' }}>{testimonial.text}</p>
                  <div style={{ borderTop: '1px solid #e0e0e0', paddingTop: '15px' }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>{testimonial.name}</h4>
                    <p style={{ color: '#999', fontSize: '14px' }}>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ background: '#4CAF50', padding: '80px 20px', textAlign: 'center', color: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '42px', marginBottom: '20px' }}>Ready to Start Your Project?</h2>
            <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>
              Let's discuss how we can help transform your business digitally
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
              <button style={{ padding: '15px 40px', fontSize: '18px', background: 'white', color: '#4CAF50', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' }}>Get Free Quote</button>
              <button style={{ padding: '15px 40px', fontSize: '18px', background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '5px', cursor: 'pointer', fontWeight: '600' }}>Schedule Call</button>
            </div>
          </div>
        </div>

       {/* Bad: MANY Heavy external scripts */}
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js"></script>
      </main>
      <Footer />
    </>
  )
}