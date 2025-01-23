const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  }
//   **`username`**

//    - **Type**: String
//    - **Constraints**: Required, Unique
//    - **Purpose**: Ensures each user has a distinct username.
,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String], // Array of strings, e.g., ['user', 'admin']
    default: ['user'], // Default role is 'user'
  },
  profile: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
  },
  lastLogin: {
    type: Date,
    default: Date.now, // Automatically sets to the current date and time
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('User', userSchema);
