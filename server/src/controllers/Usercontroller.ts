// server/src/controllers/UserController.ts
import { Request, Response } from 'express';
const { User } = require('../models/user');

export const submitForm = async (req: Request, res: Response) => {
  try {
    // Destructure form data from the request body
    const {
      firstName,
      lastName,
      email,
      telephoneNumber,
      gender,
      dob,
      comments,
    } = req.body;

    // Create a new user record in the SQLite database using Sequelize
    const user = await User.create({
      firstName,
      lastName,
      email,
      telephoneNumber,
      gender,
      dob,
      comments,
    });

    // Respond with a success message and the created user data
    res.status(200).json({ message: 'Form data submitted successfully', user });
  } catch (error) {
    // Handle any errors that occur during database interaction
    console.error('Error submitting form data:', error);
    res.status(500).json({ message: 'Failed to submit form data' });
  }
};
