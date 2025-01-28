import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import mysql from "mysql2/promise";

// MongoDB setup
const MONGO_URI = "mongodb://localhost:27017/Next";
mongoose.connect(MONGO_URI, {});

// MySQL setup
const SQL_URI = {
  host: "localhost",
  user: "root",
  password: "Droom@123",
  database: "Next",
};
let sqlClient: mysql.Connection;

async function connectToMySQL() {
  if (!sqlClient || sqlClient.connection.stream.destroyed) {
    sqlClient = await mysql.createConnection(SQL_URI);
    console.log("Connected to MySQL successfully.");
  }
}
connectToMySQL();

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const ContactModel = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    // Save to MongoDB
    const contact = new ContactModel({ name, email, message });
    await contact.save();

    // Save to MySQL
    await connectToMySQL(); // Ensure MySQL connection is active
    await sqlClient.execute(
      "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    );

    return NextResponse.json({ message: "Data saved successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Failed to save data." }, { status: 500 });
  }
}
