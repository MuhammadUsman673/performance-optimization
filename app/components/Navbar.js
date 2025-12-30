import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ background: '#1a1a1a', padding: '20px', color: 'white' }}>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Inter' }}>
        <h2 style={{ margin: 0 }}>TechBiz Solutions</h2>
        <div style={{ display: 'flex', gap: '30px' }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
          <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
          <Link href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
          <Link href="/login" style={{ color: '#4CAF50', textDecoration: 'none' }}>Login</Link>
          <Link href="/signup" style={{ color: '#4CAF50', textDecoration: 'none', border: '1px solid #4CAF50', padding: '5px 15px', borderRadius: '4px' }}>Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}