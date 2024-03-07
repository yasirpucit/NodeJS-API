import "dotenv/config";
import express from "express";

import setupDatabase from "./config/database";
import applyMiddlewares from "./middlewares";
import router from "./routes";

const app = express();

setupDatabase();
applyMiddlewares(app);

app.use("/api", router);
app.use("/test-endpoint", (req, res) => res.status(200).json({ message: "Server Is Listening" }));

app.listen(process.env.PORT, () => {
  console.log(`app is listening to port ${process.env.PORT}`);
});

export default app;
