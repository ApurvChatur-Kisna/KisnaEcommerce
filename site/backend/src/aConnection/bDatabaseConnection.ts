import mongoose from 'mongoose';


const databaseConnection = () => {
  const DB_URL = "mongodb+srv://AlwaysCoolUser:AlwaysCool@apurvchatur.ods89az.mongodb.net/ClientProject";

  mongoose.set("strictQuery", true);
  mongoose
    .connect(DB_URL, { appName: "KisnaApplication" })
    .then(response => {
      console.log(`Great!... Database connected on server ${response.connection.host}`);
    })
    .catch(error => {
      console.log(error);
    })
}

export default databaseConnection;