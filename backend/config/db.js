import mongoose from "mongoose";

export const connectDB  = async () => {
    await mongoose.connect('mongodb+srv://food:1234@cluster0.ykj1s.mongodb.net/food').then(()=>console.log("DB Connected"));
}
