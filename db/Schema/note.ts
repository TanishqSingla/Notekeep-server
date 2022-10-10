import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
	title: String,
	content: { type: String, required: true },
});

export default mongoose.model("Note", NoteSchema);
