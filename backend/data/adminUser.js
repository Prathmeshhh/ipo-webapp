import bcrypt from 'bcryptjs';

const adminUser = {
  email: "admin@bluestock.com",
  // Password is "admin123" hashed
  password: bcrypt.hashSync("admin123", 10)
};

export default adminUser;
