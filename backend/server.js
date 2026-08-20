import dotenv from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/config/database.js";

dotenv.config();
connectDB();

const port = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
