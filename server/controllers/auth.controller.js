import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/token.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords doesn't match" });
    }

    // hash passswords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // https://avatar-placeholder.iran.liara.run

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.username,
        profilePic: newUser.profilePic,
      });
    }else{
      res.status(400).json({error: "Invalid User data"})
    }
  } catch (err) {
    console.log("Error in signup controller", err.message);
    res.status(401).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try{
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user?.password || "");

    if(!user || !validPassword){
      res.status(400).json({error: "Invalid username or password"})
    }

    generateToken(user._id, res);

    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.username,
      profilePic: user.profilePic,
    });
  }catch(err){
    console.log("Error in login controller", err.message);
    res.status(401).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try{
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  }catch(err){
    console.log("Error in logout controller", err.message);
    res.status(401).json({ error: "Internal Server Error" });
  }
};
