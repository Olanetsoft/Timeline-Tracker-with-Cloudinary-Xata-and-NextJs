import cookie from "cookie";
import { getXataClient } from "../../src/xata";
import { promisify } from "util";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { use } from "react";

// compare password with bcrypt
const compare = promisify(bcrypt.compare);

// initialize XataClient
const xata = getXataClient();

// Hash password with bcrypt
const KEY = "Our_Super_Secret_JWT_Key_For_Xata";

// Login
const Login = async (req, res) => {
  // Get user data from request body
  const { email, password } = req.body;

  // Fetch user from database using email address as unique identifier if it exists
  const user = await xata.db.users.filter({ email }).getFirst();

  // compare password
  const passwordsMatch = compare(password, user.password);

  if (passwordsMatch) {
    const token = jwt.sign({ email, password }, KEY); // create token

    // Set multiple item in cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      }) +
        cookie.serialize("userId", user.id, {
          httpOnly: true,
          secure: "development",
          sameSite: "strict",
          maxAge: 60 * 60 * 24, // 1 day
          path: "/",
        })
    );

    // return userId
    res.json({ userId: user.id });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

export default Login;
