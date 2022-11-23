import { getXataClient } from "../../src/xata";
import { promisify } from "util";
import bcrypt from "bcryptjs"; // bcrypt to hash user password

// Hash password with bcrypt
const hash = promisify(bcrypt.hash);

// initialize XataClient function
const xata = getXataClient();

export default async function register(req, res) {
  // Get user data from request body
  const { firstName, lastName, email, password } = req.body;

  // Fetch user from database using email address as unique identifier if it exists
  const userExist = await xata.db.users.filter({ email }).getFirst();

  // If user exists, return error
  if (userExist) {
    res.status(400);
    throw new Error("User already exists"); // throw error if user with email already exists
  }

  // Create a new user in the database
  const user = await xata.db.users.create({
    firstName,
    lastName,
    email,
    password: await hash(password, 10),
  });

  res.json({ message: "Success" });
  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }
}
