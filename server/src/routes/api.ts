import express from 'express';
const { submitForm } = require('../controllers/UserController');

const router = express.Router();

router.post('/submitForm', submitForm);

export default router;
