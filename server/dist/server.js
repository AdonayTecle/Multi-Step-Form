"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./models/user"); // Import your Sequelize User model
const api_1 = __importDefault(require("./routes/api")); // Adjust the path as needed
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use(express_1.default.json());
// Serve the React app from the client/build directory
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/build')));
// Define API routes
app.use('/api', api_1.default);
// Define a route to handle the form data submission
app.post('/api/submitForm', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Destructure form data from the request body
        const { firstName, lastName, email, telephoneNumber, gender, dob, comments, } = req.body;
        // Create a new user record in the SQLite database using Sequelize
        const user = yield user_1.User.create({
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
    }
    catch (error) {
        // Handle any errors that occur during database interaction
        console.error('Error submitting form data:', error);
        res.status(500).json({ message: 'Failed to submit form data' });
    }
}));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
