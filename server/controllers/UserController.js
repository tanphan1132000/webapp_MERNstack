import UserModel from "../models/userModel.js";

import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'

// Get a User
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such User");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    let users = await UserModel.find();
    users = users.map((user) => {
      const { password, ...otherDetails } = user._doc
      return otherDetails
    })
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Add new user
export const addUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const newUser = new UserModel({
    username,
    password,
    firstname,
    lastname
  });
  try {
    const result = await newUser.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

// udpate a user
export const updateUser = async (req, res) => {
  const { id, password } = req.body;

  try {
    // if we also have to update password then password will be bcrypted again
    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }
    const user = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // const token = jwt.sign(
    //   { username: user.username, id: user._id },
    //   process.env.JWTKEY,
    //   { expiresIn: "1h" }
    // );
    // console.log({ user, token })
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a user
export const deleteUser = async (req, res) => {
  const id = req.body.id;

  try {
    await UserModel.findByIdAndDelete(id);
    res.status(200).json("User Deleted Successfully!");
  } catch (error) {
    res.status(500).json(err);
  }

};