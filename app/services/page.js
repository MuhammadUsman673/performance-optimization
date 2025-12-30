import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'Inter', maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px', textAlign: 'center' }}>Our Services</h1>
        <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '60px', color: '#666' }}>
          Comprehensive digital solutions tailored to your business needs
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
          {[
            { img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200', title: 'Web Development', desc: 'Custom websites and web applications using latest technologies like React, Next.js, and Node.js' },
            { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200', title: 'E-Commerce Solutions', desc: 'Full-featured online stores with payment integration, inventory management, and analytics' },
            { img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200', title: 'Mobile Development', desc: 'Native iOS and Android apps, or cross-platform solutions using React Native' },
            { img: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200', title: 'Digital Marketing', desc: 'SEO optimization, social media marketing, content strategy, and paid advertising campaigns' },
            { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200', title: 'UI/UX Design', desc: 'Beautiful, user-friendly interfaces that enhance user experience and drive conversions' },
            { img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200', title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure, deployment, and DevOps services on AWS, Azure, or GCP' }
          ].map((service, i) => (
            <div key={i} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={service.img} alt={service.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '15px' }}>{service.title}</h3>
                <p style={{ lineHeight: '1.6', color: '#666' }}>{service.desc}</p>
                <button style={{ marginTop: '20px', padding: '10px 30px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
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