import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema(
  {
    room_id: String,
    messages: [{
      user_id: String,
      message: String,
      time_create: String,
    }],
  },
  {
    timestamps: true,
  }
);

const ChatModel = mongoose.model("Chats", ChatSchema);
export default ChatModel;
