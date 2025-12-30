import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a', color: 'white', marginTop: '100px', fontFamily: 'Inter' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px 30px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '40px' }}>
          
          {/* Company Info */}
          <div>
            <h3 style={{ marginBottom: '20px', fontSize: '20px' }}>TechBiz Solutions</h3>
            <p style={{ color: '#999', lineHeight: '1.6' }}>
              Leading digital solutions provider helping businesses transform their online presence since 2020.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white' }}>📘</a>
              <a href="#" style={{ color: 'white' }}>🐦</a>
              <a href="#" style={{ color: 'white' }}>💼</a>
              <a href="#" style={{ color: 'white' }}>📷</a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/services" style={{ color: '#999', textDecoration: 'none' }}>Web Development</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/services" style={{ color: '#999', textDecoration: 'none' }}>Mobile Apps</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/services" style={{ color: '#999', textDecoration: 'none' }}>E-Commerce</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/services" style={{ color: '#999', textDecoration: 'none' }}>Digital Marketing</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/services" style={{ color: '#999', textDecoration: 'none' }}>UI/UX Design</Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/about" style={{ color: '#999', textDecoration: 'none' }}>About Us</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <Link href="/contact" style={{ color: '#999', textDecoration: 'none' }}>Contact</Link>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Careers</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Blog</a>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Portfolio</a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Contact Info</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#999' }}>
              <li style={{ marginBottom: '12px' }}>
                📧 info@techbiz.com
              </li>
              <li style={{ marginBottom: '12px' }}>
                📞 +1 (555) 123-4567
              </li>
              <li style={{ marginBottom: '12px' }}>
                📍 123 Tech Street<br />San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid #333', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#999', margin: 0 }}>© 2024 TechBiz Solutions. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}