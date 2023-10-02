import { Request, Response } from 'express';
const { User } = require('../models/user');

export const submitForm = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      telephoneNumber,
      gender,
      dob,
      comments,
    } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      telephoneNumber,
      gender,
      dob,
      comments,
    });

    res.status(200).json({ message: 'Form data submitted successfully', user });
  } catch (error) {

    console.error('Error submitting form data:', error);
    res.status(500).json({ message: 'Failed to submit form data' });
  }
};
