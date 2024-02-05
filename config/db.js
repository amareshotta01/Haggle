import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:user123@cluster0.mcoppul.mongodb.net/ecommerce');
    console.log(
      'Conneted To Mongodb Database'
    );
  } catch (error) {
    console.log('Errro in Mongodb');
  }
};

export default connectDB;
