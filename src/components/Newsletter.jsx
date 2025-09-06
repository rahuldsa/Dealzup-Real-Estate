import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple email validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    
    // Reset form and show success message
    setEmail('');
    setError('');
    setSubmitted(true);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-16 bg-indigo-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
        <p className="text-xl text-gray-600 mb-8">
          Subscribe to our newsletter to receive the latest property listings and market insights.
        </p>
        
        {submitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg max-w-md mx-auto">
            <p>Thank you for subscribing to our newsletter!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-input w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="form-error text-left mt-2">{error}</p>}
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;