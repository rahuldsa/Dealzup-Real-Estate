// Validation utilities

export const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const minLength = (value, min) => {
  return value.length >= min;
};

export const passwordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

export const validateSignupForm = (formData) => {
  const errors = {};
  
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!minLength(formData.password, 6)) {
    errors.password = 'Password must be at least 6 characters';
  }
  
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (!passwordsMatch(formData.password, formData.confirmPassword)) {
    errors.confirmPassword = 'Passwords do not match';
  }
  
  return errors;
};

export const validateLoginForm = (formData) => {
  const errors = {};
  
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!isEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!formData.password) {
    errors.password = 'Password is required';
  }
  
  return errors;
};