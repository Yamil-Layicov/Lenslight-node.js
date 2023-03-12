import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DBURL, {
      dbName: "mongoData",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected sussesful");
    })
    .catch(err => {
      console.log("error connection  ${err}");
    });
};

export default conn;