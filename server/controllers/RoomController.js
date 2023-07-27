import RoomModel from "../models/roomModel.js";

// Get a Room
export const getRoom = async (req, res) => {
  const id = req.body.id;

  try {
    const room = await RoomModel.findById(id);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json("No such Room");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Add new room
export const addRoom = async (req, res) => {
  const { name, members } = req.body;

  const newUser = new RoomModel({
    name,
    members
  });
  try {
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Uppate a room
export const updateRoom = async (req, res) => {

  try {
    const room = await RoomModel.findByIdAndUpdate(req.body.id, req.body, {
      new: true,
    });
    
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a room
export const deleteRoom = async (req, res) => {
  try {
    await RoomModel.findByIdAndDelete(req.body.id);
    res.status(200).json("Room Deleted Successfully!");
  } catch (error) {
    res.status(500).json(err);
  }

};