import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/url")
        console.log("Mongodb is connected!")
    } catch (error) {
        console.log(error);
    }
}