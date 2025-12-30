import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'Inter', maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
        <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '60px', color: '#666' }}>
          Get in touch with our team. We'd love to hear from you!
        </p>
        
        <img 
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1500" 
          alt="Contact" 
          style={{ width: '100%', borderRadius: '8px', marginBottom: '40px' }}
        />
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Full Name" style={{ padding: '15px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
          <input type="email" placeholder="Email Address" style={{ padding: '15px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
          <input type="tel" placeholder="Phone Number" style={{ padding: '15px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
          <textarea placeholder="Your Message" rows="6" style={{ padding: '15px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px', resize: 'vertical' }}></textarea>
          <button type="submit" style={{ padding: '15px', fontSize: '18px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Send Message
          </button>
        </form>
        
        <div style={{ marginTop: '60px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', textAlign: 'center' }}>
          <div>
            <h3 style={{ marginBottom: '10px' }}>📧 Email</h3>
            <p style={{ color: '#666' }}>info@techbiz.com</p>
          </div>
          <div>
            <h3 style={{ marginBottom: '10px' }}>📞 Phone</h3>
            <p style={{ color: '#666' }}>+1 (555) 123-4567</p>
          </div>
          <div>
            <h3 style={{ marginBottom: '10px' }}>📍 Address</h3>
            <p style={{ color: '#666' }}>123 Tech Street, SF</p>
          </div>
        </div>
      </main>
         <Footer />
    </>
  )
}