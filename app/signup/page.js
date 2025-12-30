import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Signup() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'Inter', maxWidth: '450px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>Create Account</h1>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address</label>
              <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Confirm Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <input type="checkbox" style={{ marginTop: '4px' }} />
              <span style={{ fontSize: '14px', color: '#666' }}>I agree to the Terms of Service and Privacy Policy</span>
            </label>
            
            <button type="submit" style={{ width: '100%', padding: '15px', fontSize: '18px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
              Create Account
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
            Already have an account? <Link href="/login" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: '600' }}>Sign in</Link>
          </p>
        </div>
    
      </main>
   <Footer />
    </>
  )
}