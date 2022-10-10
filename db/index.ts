import mongoose from "mongoose";
import Note from "./Schema/note";

const connectDB = async () => {
	await mongoose.connect("mongodb://localhost:27017/test");
};

export { connectDB, Note };
