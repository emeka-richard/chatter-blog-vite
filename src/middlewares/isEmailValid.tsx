const isValidEmail = (email: string): boolean => {
    // Basic email validation logic, you can use a library or a more sophisticated validation approach
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  export default isValidEmail;