import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import router from "./routes/payment.route.js";
import dns from "dns";

dns.setServers(["0.0.0.0", "8.8.8.8"]);

dotenv.config();
const port = process.env.PORT || 8006;

const app = express();
app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.json({ message: "hello from payment service" });
});

app.listen(port, () => {
  connectDb();
  console.log(`payment service started at ${port}`);
});
