import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  const uri ="mongodb+srv://venu191202:F1d0Yvgdwa3fd458@attendancelist.nmdl70z.mongodb.net/tinylink?retryWrites=true&w=majority&appName=AttendanceList" as string;

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
