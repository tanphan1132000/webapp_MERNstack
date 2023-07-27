import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    name: {
        type: String
    },
    members: [],
  },
  {
    timestamps: true,
  }
);

const RoomModel = mongoose.model("Rooms", RoomSchema);
export default RoomModel;
