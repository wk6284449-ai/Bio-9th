import React, { useState, useEffect } from 'react';

// ==========================================
// 📝 MASTER EMAIL LIST: ADD OR REMOVE EMAILS HERE
// ==========================================
const ALLOWED_EMAILS: string[] = [
  "teacher@example.com",
  "student1@example.com",
  "student2@example.com"
];

export default function EmailGate({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAccess = localStorage.getItem('bio9th_access_granted');
    const savedEmail = localStorage.getItem('bio9th_user_email');
    
    if (savedAccess === 'true' && savedEmail && ALLOWED_EMAILS.includes(savedEmail.toLowerCase().trim())) {
      setIsAuthorized(true);
    } else {
      localStorage.removeItem('bio9th_access_granted');
      localStorage.removeItem('bio9th_user_email');
      setIsAuthorized(false);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedEmail = email.trim().toLowerCase();

    if (!formattedEmail) {
      setError('Please enter your email address.');
      return;
    }

    if (ALLOWED_EMAILS.includes(formattedEmail)) {
      localStorage.setItem('bio9th_access_granted', 'true');
      localStorage.setItem('bio9th_user_email', formattedEmail);
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Access Denied. This email is not registered for Bio-9th.');
    }
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <p>Loading Bio-9th App...</p>
      </div>
    );
  }

  // 📖 IF ALLOWED: SHOW THE BIOLOGY APP CONTENT
  if (isAuthorized) {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#e0f2fe', padding: '10px 20px', fontFamily: 'sans-serif' }}>
          <span>Logged in as: <b>{localStorage.getItem('bio9th_user_email')}</b></span>
          <button 
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
            style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Logout
          </button>
        </div>
        {children}
      </>
    );
  }

  // 🔒 IF NOT ALLOWED: SHOW THE LOCK SCREEN
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.icon}>🔬</span>
          <h1 style={styles.title}>Bio-9th Portal</h1>
          <p style={styles.subtitle}>Sindh Board Class IX Biology Prep</p>
        </div>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label} htmlFor="email">
            Enter your registered email to unlock access:
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            style={styles.input}
            required
          />
          
          {error && <p style={styles.error}>{error}</p>}
          
          <button type="submit" style={styles.button}>
            Verify & Enter App
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: 'system-ui, sans-serif',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  header: {
    marginBottom: '24px',
  },
  icon: {
    fontSize: '48px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
    margin: '12px 0 4px 0',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '14px',
    margin: 0,
  },
  form: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #d1d5db',
    fontSize: '16px',
    boxSizing: 'border-box',
    marginBottom: '12px',
  },
  error: {
    color: '#dc2626',
    fontSize: '14px',
    margin: '0 0 12px 0',
    fontWeight: '500',
  },
  button: {
    width: '100%',
    backgroundColor: '#059669',
    color: 'white',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};
