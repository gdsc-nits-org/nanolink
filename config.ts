// config.ts

// Define your environmental variables here
const env = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "", // Your JWT secret key
  MONGODB_URI: process.env.MONGODB_URI || "", // Your MongoDB URI
  // Add more environmental variables as needed
};

export default env;
