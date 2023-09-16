import mongoose from "mongoose";

const { Schema, model } = mongoose;

const loginSchema = new Schema({
    username: String,
    password: String,
})

const Login = model("Login", loginSchema);
export default Login;