
import mongoose from "mongoose";
import app from "./app";
const port = 5000;



async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/pactric-DB");
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootstrap().catch((err) => console.log(err));

