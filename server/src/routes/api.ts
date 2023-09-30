// server/src/routes/api.ts
import express from 'express';
const { submitForm } = require('../controllers/UserController');

const router = express.Router();

// Define a route to handle the form data submission
router.post('/submitForm', submitForm);

export default router;
