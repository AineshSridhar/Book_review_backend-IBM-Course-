import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./configuration/connection.js";

//models
import user from "./models/user.js";
import book from "./models/books.js";
import review from "./models/review.js"

import bookRoutes from "./routes/book.js"
import authRoutes from "./routes/auth.js"
import reviewRoutes from "./routes/review.js"
import notFoundHandler from "./middleware/not-found.js"

dotenv.config();

const app = express();
app.use(express.json())

const baseURL = "/api/v1";
app.use(baseURL, authRoutes);
app.use(baseURL, bookRoutes);
app.use(baseURL, reviewRoutes);
app.use(notFoundHandler)

connectDB();

try{
    const port = process.env.PORT
    app.listen(port, console.log(`Server running on port ${port}!`));
} catch (err) {
    console.log(err);
}

