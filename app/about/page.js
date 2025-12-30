import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'Inter', maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '30px' }}>About Us</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000" 
          alt="Team" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '40px' }}
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '60px' }}>
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Our Story</h2>
            <p style={{ lineHeight: '1.8', fontSize: '18px' }}>
              Founded in 2020, TechBiz Solutions has been at the forefront of digital transformation. 
              We've helped over 200 businesses achieve their online goals through cutting-edge web solutions.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '18px', marginTop: '20px' }}>
              Our team of expert developers, designers, and marketers work together to deliver 
              exceptional results that drive real business growth.
            </p>
          </div>
          
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>Our Mission</h2>
            <p style={{ lineHeight: '1.8', fontSize: '18px' }}>
              To empower businesses with innovative digital solutions that transform their online presence 
              and accelerate growth in the digital age.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1500" 
              alt="Mission" 
              style={{ width: '100%', marginTop: '30px', borderRadius: '8px' }}
            />
          </div>
        </div>
      </main>
         <Footer />
    </>
  )
}