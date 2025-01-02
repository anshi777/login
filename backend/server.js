import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
// app.use(cors());
// const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' })); 

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.use("/api/user", userRoute);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
