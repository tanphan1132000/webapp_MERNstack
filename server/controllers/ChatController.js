import ChatModel from "../models/chatModel.js";


// Create a chat
export const createChat = async (req, res) => {
  const { room_id, messages } = req.body;
  const newChat = new ChatModel({
    room_id,
    messages,
  });
  try {
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a chat
export const updateChat = async (req, res) => {
  const { room_id, messages } = req.body;

  const old_chat = await ChatModel.find({room_id: room_id});
  req.body.messages = [...old_chat[0].messages, messages];

  try {
    const new_chat = await ChatModel.findByIdAndUpdate(old_chat[0]._id, req.body, {
      new: true,
    });
    res.status(200).json(new_chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a chat
export const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.find({room_id: req.body.room_id});
    res.status(200).json(chat)
  } catch (error) {
    res.status(500).json(error)
  }
};

// Delete a chat
export const deleteChat = async (req, res) => {
  const chat = await ChatModel.find({room_id: req.body.id})
  try {
    await ChatModel.findByIdAndDelete(chat[0]._id);
    res.status(200).json("Chat Deleted Successfully!");
  } catch (error) {
    res.status(500).json(err);
  }
};