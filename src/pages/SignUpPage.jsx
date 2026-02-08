import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('signup');

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Welcome Header */}
        <div style={{ width: '100%', backgroundColor: '#6D28D9', borderRadius: '40px', padding: '48px 0', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '4rem', fontFamily: 'Impact, Arial Black, sans-serif', fontStyle: 'italic', textTransform: 'uppercase' }}>
            WELCOME !
          </h1>
        </div>

        {/* Tab Toggle */}
        <div style={{ width: '100%', maxWidth: '448px', display: 'flex', justifyContent: 'space-between', padding: '0 16px', marginBottom: '8px' }}>
          <button
            onClick={() => {
              console.log('Switching to signup');
              setActiveTab('signup');
            }}
            style={{
              fontSize: '2rem',
              fontFamily: 'Impact, Arial Black, sans-serif',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              paddingBottom: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'signup' ? '#6D28D9' : 'white',
              borderBottom: activeTab === 'signup' ? '4px solid #6D28D9' : 'none',
              opacity: activeTab === 'signup' ? 1 : 0.9
            }}
          >
            Sign-up
          </button>
          <button
            onClick={() => {
              console.log('Switching to login');
              setActiveTab('login');
            }}
            style={{
              fontSize: '2rem',
              fontFamily: 'Impact, Arial Black, sans-serif',
              fontStyle: 'italic',
              textTransform: 'uppercase',
              paddingBottom: '4px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: activeTab === 'login' ? '#6D28D9' : 'white',
              borderBottom: activeTab === 'login' ? '4px solid #6D28D9' : 'none',
              opacity: activeTab === 'login' ? 1 : 0.9
            }}
          >
            Log-in
          </button>
        </div>
        
        {/* Divider */}
        <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(109, 40, 217, 0.3)', marginBottom: '32px' }}></div>

        {/* Sign-up Form */}
        {activeTab === 'signup' && (
          <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <input 
              type="text" 
              placeholder="Name" 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: '2px solid #6D28D9',
                borderRadius: '16px',
                padding: '20px 24px',
                color: 'white',
                fontSize: '1.5rem'
              }}
            />
            
            <input 
              type="tel" 
              placeholder="Phone number" 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: '2px solid #6D28D9',
                borderRadius: '16px',
                padding: '20px 24px',
                color: 'white',
                fontSize: '1.5rem'
              }}
            />

            <input 
              type="tel" 
              placeholder="Parent phone number" 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: '2px solid #6D28D9',
                borderRadius: '16px',
                padding: '20px 24px',
                color: 'white',
                fontSize: '1.5rem'
              }}
            />

            <input 
              type="password" 
              placeholder="Password" 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: '2px solid #6D28D9',
                borderRadius: '16px',
                padding: '20px 24px',
                color: 'white',
                fontSize: '1.5rem'
              }}
            />

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#6D28D9',
                color: 'white',
                fontWeight: 'bold',
                padding: '20px',
                borderRadius: '16px',
                fontSize: '1.75rem',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                marginTop: '32px'
              }}
            >
              Sign Up
            </button>
          </form>
        )}

        {/* Log-in Form */}
        {activeTab === 'login' && (
          <form style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <input 
              type="tel" 
              placeholder="Phone number" 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: '2px solid #6D28D9',
                borderRadius: '16px',
                padding: '20px 24px',
                color: 'white',
                fontSize: '1.5rem'
              }}
            />

            <input 
              type="password" 
              placeholder="Password" 
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: '2px solid #6D28D9',
                borderRadius: '16px',
                padding: '20px 24px',
                color: 'white',
                fontSize: '1.5rem'
              }}
            />

            <button
              type="submit"
              style={{
                width: '100%',
                backgroundColor: '#6D28D9',
                color: 'white',
                fontWeight: 'bold',
                padding: '20px',
                borderRadius: '16px',
                fontSize: '1.75rem',
                textTransform: 'uppercase',
                border: 'none',
                cursor: 'pointer',
                marginTop: '32px'
              }}
            >
              Log In
            </button>
          </form>
        )}

        {/* Navigation Back */}
        <div style={{ marginTop: '48px' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              color: '#6b7280',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: '0.875rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
