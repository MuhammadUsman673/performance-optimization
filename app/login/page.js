import Navbar from '../components/Navbar'
import Link from 'next/link'
import Footer from '../components/Footer'

export default function Login() {
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'Inter', maxWidth: '450px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>Welcome Back</h1>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Email Address</label>
              <input type="email" placeholder="you@example.com" style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <div>
              <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '12px', fontSize: '16px', border: '1px solid #ddd', borderRadius: '4px' }} />
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" style={{ color: '#4CAF50', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            
            <button type="submit" style={{ width: '100%', padding: '15px', fontSize: '18px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
              Sign In
            </button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '30px', color: '#666' }}>
            Don't have an account? <Link href="/signup" style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: '600' }}>Sign up</Link>
          </p>
        </div>
      </main>
         <Footer />
    </>
  )
}   